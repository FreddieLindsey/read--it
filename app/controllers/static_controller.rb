# Controller for all static pages
class StaticController < ApplicationController
  def index
    @posts = Post.all.order(updated_at: :desc)
  end

  def about
    @people = [
      { name: 'Freddie Lindsey',
        image: '',
        url: 'http://freddielindsey.me' }
    ]
  end
end
