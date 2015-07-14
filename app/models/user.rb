# Devise generated user model
class User < ActiveRecord::Base

  validates :username, presence: true
  validates :email, presence: true,
            format: { with: /\b[A-Z0-9._%a-z\-]+@(?:[A-Z0-9a-z\-]+\.)+[A-Za-z]{2,4}\z/,
                      message: 'Not a valid email!' }

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable,
         :authentication_keys => [:username]
end
