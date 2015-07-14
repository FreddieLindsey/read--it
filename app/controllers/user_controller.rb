class UserController < ApplicationController
  def posts
    @posts = Post.where(user_id: current_user.id)
  end
end
