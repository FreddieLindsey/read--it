# Controller for sub reddits
class SubRedditController < ApplicationController
  before_filter :validate_case
  require 'json'

  def show
    @posts = []
    Post.where(sub_reddit_id: SubReddit.find_by(title: params[:title])).order(updated_at: :desc).each do |post|
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

  def new
  end

  def destroy
  end

  def validate_case
    if (request.url != request.url.downcase)
      # TODO: Lookup correct status for rewrite
      redirect_to request.url.downcase, status: :moved_permanently
    end
  end
end
