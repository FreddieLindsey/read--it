# Controller for posts
class PostController < ApplicationController
  def show
    user_session
    @post = Post.find_by(id: params[:id],
                         sub_reddit_id:
                         SubReddit.find_by(title: params[:sub_reddit]))
    if @post.nil?
      redirect_to "/r/#{params[:sub_reddit]}"
    else
      @comments = Comment.where(post_id: @post.id)
    end
  end

  def update
  end

  def new
  end

  def destroy
  end
end
