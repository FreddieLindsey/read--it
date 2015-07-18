# Helper functions for the application
module ApplicationHelper

  def navbar_props
    { 
      "sitename": "Reddit",
      "root_path": root_path,
      "links": navbar_links
    }
  end

  def navbar_links
    @links = [
      { url: '/about', title: 'About' },
      { title: 'SubReddits', dropdown: subreddits }
    ]
    if user_signed_in?
      @links << {
        title: current_user.username,
        dropdown: [
          { url: '/users/posts', title: 'View Posts'},
          { divider: true },
          { url: edit_user_registration_path, title: 'Edit' },
          { url: destroy_user_session_path, title: 'Logout'}
        ]
      }
    else
      @links << {
        title: "User",
        dropdown: [
          { url: new_user_registration_path, title: 'Sign Up!' },
          { divider: true },
          { url: new_user_session_path, title: 'Login!' }
        ]
      }
    end
  end

  private

  def subreddits
    formatted_subreddits = []
    SubReddit.all.order(title: :asc).select('title').each do |subreddit|
      formatted_subreddits << { title: subreddit.title, url: root_path + 'r/' + subreddit.title }
    end
    formatted_subreddits
  end

end
