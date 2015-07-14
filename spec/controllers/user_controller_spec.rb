require 'rails_helper'

RSpec.describe UserController, type: :controller do

  describe "GET #posts" do
    it "returns http success" do
      get :posts
      expect(response).to have_http_status(:success)
    end
  end

end
