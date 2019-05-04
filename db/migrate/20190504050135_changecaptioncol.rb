class Changecaptioncol < ActiveRecord::Migration[5.2]
  def change
    change_column_null :posts, :caption, true
  end
end
