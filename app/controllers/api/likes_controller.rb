class Api::LikesController < ApplicationController
  def index
    @likes = Like.where(post_id: params[:post_id])
    render :index
  end

  def create
    @like = Like.new(like_params)
    @like.user_id = current_user.id
    
    if @like.save
      render :show
    else
      render json: @like.errors.full_messages, status: 401
    end
  end

  def destroy
    @like = Like.find_by(id: params[:id])

    if @like 
      @like.destroy
      render :show
    else
      render json: ["Can't unlike"], status: 401
    end
  end

  private 

  def like_params
    params.require(:like).permit(:post_id)
  end
end
