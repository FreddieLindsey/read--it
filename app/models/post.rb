class Post < ActiveRecord::Base
  belongs_to :user
  belongs_to :sub_reddit
end
