class Api::PostsController < ApplicationController
  def index
    # @posts = Post.all
    # should not be all posts, only the posts current_user follows
    if params[:user_id]
      @posts = current_user.following_posts
      @posts += current_user.posts  
    else
      @posts = Post.all      
    end

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
    # @post = current_user.posts.find(params[:id])
    if @post.update(post_params) 
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find(params[:id])
    # should be current_user's posts
    # @post = current_user.posts.find(params[:id])
    if @post.destroy
      render :show
      # might be render sth else
    else
      render json: ['Post Not found'], status: 404
    end
  end

  private 

  def post_params
    params.require(:post).permit(:caption, :photo)
  end
end
