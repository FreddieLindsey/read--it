require 'rails_helper'

# Tests on the user model, provided by devise
RSpec.describe User, type: :model do
  context 'Creating a user: ' do
    before :each do
      @username = 'Username'
      @email    = 'email@email.com'
      @email_invalid = [
        'email.com',
        'email@email',
        '@email.com',
        '@email'
      ]
      @password = 'password'
      @password_invalid = %w('hello', 'worldone')
    end

    it 'with a valid username, email and password' do
      user = User.new(username: @username,
                      email:    @email,
                      password: @password,
                      password_confirmation: @password)
      expect(user.valid?).to be true
    end

    it 'with a valid username and password but no email' do
      user = User.new(username: @username,
                      password: @password,
                      password_confirmation: @password)
      expect(user.valid?).to be false
    end

    it 'with a valid username and email but no password' do
      user = User.new(username: @username,
                      email:    @email)
      expect(user.valid?).to be false
    end

    it 'with a valid email and password but no username' do
      user = User.new(email:    @email,
                      password: @password,
                      password_confirmation: @password)
      expect(user.valid?).to be false
    end

    it 'with a valid username and password but invalid email' do
      @email_invalid.each do |email_invalid|
        user = User.new(username: @username,
                        email:    email_invalid,
                        password: @password,
                        password_confirmation: @password)
        expect(user.valid?).to be false
      end
    end

    xit 'with a valid username and email but invalid password' do
      @password_invalid.each do |password_invalid|
        user = User.new(username: @username,
                        email:    @email,
                        password: password_invalid,
                        password_confirmation: password_invalid)
        expect(user.valid?).to be false
      end
    end
  end
end
