# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
require 'csv'

properties = CSV.read(Rails.root.join("db","seeds","redfin_2021-10-04-22-37-49.csv"), headers: true)
properties.each do |property|
  new_property = Property.create(
                                property_type: property["PROPERTY TYPE"],
                                address:       property["ADDRESS"],
                                state:         property["STATE OR PROVINCE"],
                                zip:           property["ZIP OR POSTAL CODE"],
                                price:         property["PRICE"],
                                beds:          property["BEDS"],
                                baths:         property["BATHS"],
                                location:      property["LOCATION"],
                                square_feet:   property["SQUARE FEET"],
                                lot_size:      property["LOT SIZE"],
                                year_built:    property["YEAR BUILT"],
                                url:           property["URL (SEE http://www.redfin.com/buy-a-home/comparative-market-analysis FOR INFO ON PRICING)"],
                                latitude:      property["LATITUDE"].to_f,
                                longitude:     property["LONGITUDE"].to_f
                              )
end
