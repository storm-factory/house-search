class CreateProperties < ActiveRecord::Migration[6.1]
  def change
    create_table :properties do |t|
      t.string :property_type
      t.string :address
      t.string :state
      t.string :zip
      t.integer :price
      t.integer :beds
      t.integer :baths
      t.string :location
      t.integer :square_feet
      t.integer :lot_size
      t.integer :year_built
      t.string :url
      t.decimal :latitude, {:precision=>10, :scale=>7}
      t.decimal :longitude, {:precision=>10, :scale=>7}

      t.timestamps
      t.index :address, unique: true
    end
  end
end
