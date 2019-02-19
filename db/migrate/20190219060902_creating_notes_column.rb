class CreatingNotesColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :songs, :notes, :string, default: [], array: true 
  end
end
