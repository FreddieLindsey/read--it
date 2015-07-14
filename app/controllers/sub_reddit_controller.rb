# Controller for sub reddits
class SubRedditController < ApplicationController
  before_filter :validate_case

  def show
    @posts = Post.where(sub_reddit_id: SubReddit.find_by(title: params[:title]))
                 .order(updated_at: :desc)
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
