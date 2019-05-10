class Api::CommentsController < ApplicationController
  def index   
    @comments = Comment.where(post_id: params[:post_id])
    render :index
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
  
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 401
    end
  end

  def destroy
    @comment = Comment.find_by(id: params[:id])
    if @comment 
      @comment.destroy
      render :show
    else
      render json: ["Can't uncomment"], status: 401
    end
  end

  private 

  def comment_params
    params.require(:comment).permit(:post_id, :body)
  end
end