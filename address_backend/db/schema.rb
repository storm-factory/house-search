# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_10_09_151032) do

  create_table "properties", charset: "utf8mb4", force: :cascade do |t|
    t.string "property_type"
    t.string "address"
    t.string "state"
    t.string "zip"
    t.integer "price"
    t.integer "beds"
    t.integer "baths"
    t.string "location"
    t.integer "square_feet"
    t.integer "lot_size"
    t.integer "year_built"
    t.string "url"
    t.decimal "latitude", precision: 10, scale: 7
    t.decimal "longitude", precision: 10, scale: 7
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["address"], name: "index_properties_on_address", unique: true
  end

end
