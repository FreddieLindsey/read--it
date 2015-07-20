Rails.application.routes.draw do
  # Root as list of posts
  root 'static#index'

  # User controller
  devise_for :users, controllers: {
    confirmations: 'user/confirmations',
    unlocks: 'user/unlocks',
    registrations: 'user/registrations',
    sessions: 'user/sessions',
    passwords: 'user/passwords'
  }

  # User controller (all not devise handled)
  get 'users/posts', to: 'user#posts'

  # SubReddit controller
  get '/r/:title', to: 'sub_reddit#show'
  post '/r/:title', to: 'sub_reddit#new'
  delete '/r/:title', to: 'sub_reddit#destroy'

  # Post controller
  get '/r/:sub_reddit/posts/:id', to: 'post#show'
  get 'post/update'
  get 'post/new'
  get 'post/destroy'
end
