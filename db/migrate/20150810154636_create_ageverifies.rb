class CreateAgeverifies < ActiveRecord::Migration
  def change
    create_table :ageverifies do |t|

      t.timestamps
    end
  end
end
