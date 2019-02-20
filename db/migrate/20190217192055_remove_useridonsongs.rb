class RemoveUseridonsongs < ActiveRecord::Migration[5.2]
  def change
    remove_column :songs, :user_id
  end
end
