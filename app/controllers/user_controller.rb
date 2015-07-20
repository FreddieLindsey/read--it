class UserController < ApplicationController
  require 'json'

  def posts
    @posts = []
    Post.where(user_id: current_user.id).each do |post|
      @posts << {
        id: post.id, 
        url: root_path + 'r/' + post.sub_reddit.title + '/posts/' + post.id.to_s, 
        username: post.user.username, 
        content: post.content, 
        title: post.title
      }
    end
    @posts = @posts.to_json
  end
end
