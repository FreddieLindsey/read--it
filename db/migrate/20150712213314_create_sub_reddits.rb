class CreateSubReddits < ActiveRecord::Migration
  def change
    create_table :sub_reddits do |t|
      t.string :title, null: false

      t.timestamps null: false
    end
  end
end
