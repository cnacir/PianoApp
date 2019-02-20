class Song < ApplicationRecord
has_one_attached :song_file
belongs_to :user
    
end
