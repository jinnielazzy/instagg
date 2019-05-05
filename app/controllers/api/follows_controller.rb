class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(follow_params)
    @follow.follower_id = current_user.id

    if @follow.save
      render :show  
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = Follow.find_by(user_id: params[:user_id], follower_id: current_user.id)
    if @follow 
      @follow.destroy
      render json: {}, status: 200
    else
      render json: ["Can't unfollow"], status: 401
    end
  end

  private 
  
  def follow_params 
    params.require(:follow).permit(:user_id)
  end
end