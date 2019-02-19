class SongsController < ApplicationController
  def index
  end

  def new
    @song = Song.new 

  end

  def create
     Song.create(song_params)
     redirect_to songs_path

   
  end

  def show
    
  end

  def edit
  end

  def update
  end

  def destroy
  end
  private
  def song_params
    params.require(:song).permit(:title,:user_id,:song_file)
  end
  

end
