# Controller for all static pages
class StaticController < ApplicationController
  require 'json'

  def index
    @posts = []
    Post.all.order(updated_at: :desc).each do |post|
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

  def about
    @people = [
      { name: 'Freddie Lindsey',
        image: '',
        url: 'http://freddielindsey.me' }
    ].to_json
  end
end
