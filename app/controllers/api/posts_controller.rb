class Api::PostsController < ApplicationController
  def index
    @posts = Post.all
    # should not be all posts, only the posts current_user follows
    render :index
  end
  
  def show
    @post = Post.find_by(id: params[:id])
    if @post
      render :show
    else
      render json: ["Post Not Found"], status: 404
    end
  end

  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id
    if @post.save
      render :show  
    else
      render json: @post.errors.full_messages, status: 422
    end
  end
  
  def update
    @post = Post.find(params[:id])
    # should be current_user's posts
    if @post.update(post_params) 
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find_by(id: params[:id])
    if @post && @post.destroy
      render json: {}, status: 200
    else
      render json: ['Not found'], status: 404
    end
  end

  private 

  def post_params
    params.require(:post).permit(:caption, :photo)
  end
end
