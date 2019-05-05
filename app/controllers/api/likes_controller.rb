class Api::LikesController < ApplicationController
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
    @like = Like.find_by(user_id: current_user.id, post_id: params[:post_id])
    if @like 
      @like.destroy
      render json: {}, status: 200
    else
      render json: ["Can't unlike"], status: 401
    end
  end

  private 

  def like_params
    params.require(:like).permit(:post_id)
  end
end
