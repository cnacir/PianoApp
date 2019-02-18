class HomesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index]
	before_action :set_user, only: [:profile]

  def index
  end

	def profile
	end

	private
		def set_user
			@profile = User.find(params[:id])
		end
end
