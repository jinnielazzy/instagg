class Dropusernametable < ActiveRecord::Migration[5.2]
  def change
    drop_table :usernames
  end
end
