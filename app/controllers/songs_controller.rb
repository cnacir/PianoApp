class SongsController < ApplicationController
  def index
    @songs = Song.all
  end

  def new
  end

  def create
    @song = Song.new
  end

  def show
    @song = Song.find(params[:id])
  end

  def edit
  end

  def update
  end

  def destroy
    @song = Song.find_by(params[:id])
    @song.destroy
    
  end
end
