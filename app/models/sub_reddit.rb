# Model for a SubReddit
class SubReddit < ActiveRecord::Base
  before_save { self.title = title.downcase }
end
