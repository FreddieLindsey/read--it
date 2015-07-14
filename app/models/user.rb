# Devise generated user model
class User < ActiveRecord::Base

  validates :username, presence: true, uniqueness: { case_sensitive: false }
  validates :email, presence: true,
            format: { with: /\b[A-Z0-9._%a-z\-]+@(?:[A-Z0-9a-z\-]+\.)+[A-Za-z]{2,4}\z/,
                      message: 'Not a valid email!' }
  validates :password, presence: true

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable,
         :authentication_keys => [:username]
end
