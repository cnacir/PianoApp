class UpdatingNotesColumnINsongs < ActiveRecord::Migration[5.2]
  def change
    add_column :songs, :notes, :integer, array: true, default: []
  end
end
