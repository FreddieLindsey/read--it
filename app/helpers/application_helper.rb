# Helper functions for the application
module ApplicationHelper

  require 'json'

  def navbar_links
    @links = [
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
    return @links.to_json
  end

  def react_component(name, props)
    return
        "<script>
          React.render(
            React.createElement(#{name}, #{JSON.pretty_generate(props)}),
            document.getElementById(\'#{name}\')
          );
        </script>"
  end

  private

  def subreddits
    formatted_subreddits = []
    top = [
      { title: "Create new", url: "/subreddit/new" },
      { divider: true }
    ]
    SubReddit.all.order(title: :asc).select('title').each do |subreddit|
      formatted_subreddits << { title: subreddit.title, url: root_path + 'r/' + subreddit.title }
    end
    top + formatted_subreddits
  end

end
