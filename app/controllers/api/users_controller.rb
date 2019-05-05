class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    if @user
      render "api/users/show"
    else
      render json: ["User not found"], status: 404
    end
  end

  def update
    @user = current_user
    if @user.save
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private 

  def user_params
    params.require(:user).permit(:username, :password, :bio, :photo)
  end
end
