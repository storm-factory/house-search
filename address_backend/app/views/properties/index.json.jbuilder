json.results do
  json.array! @properties do |property|
    json.id property.id
    json.property_type property.property_type
    json.address property.address
    json.state property.state
    json.zip property.zip
    json.price property.price
    json.beds property.beds
    json.baths property.baths
    json.location property.location
    json.square_feet property.square_feet
    json.lot_size property.lot_size
    json.year_built property.year_built
    json.url property.url
    json.latitude property.latitude
    json.longitude property.longitude
  end
end
