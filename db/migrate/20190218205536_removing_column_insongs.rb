class RemovingColumnInsongs < ActiveRecord::Migration[5.2]
  def change
    remove_column :songs, :notes
  end
end
