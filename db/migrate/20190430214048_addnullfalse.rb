class Addnullfalse < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :username, :string, null: false
    change_column :users, :session_token, :string, null: false
    change_column :users, :password_digest, :string, null: false
  end
end
