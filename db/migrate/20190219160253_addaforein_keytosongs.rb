class AddaforeinKeytosongs < ActiveRecord::Migration[5.2]
  def change
    add_reference :songs, :user
  end
end
