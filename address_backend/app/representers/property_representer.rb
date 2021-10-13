require 'roar/decorator'
require 'roar/json'

class PropertyRepresenter < Roar::Decorator
  include Roar::JSON

  nested :data do
    property :id, writable: false
    nested :attributes do
      property :property_type
      property :address
      property :state
      property :zip
      property :price
      property :beds
      property :baths
      property :location
      property :square_feet
      property :lot_size
      property :year_built
      property :url
      property :latitude
      property :longitude
    end
  end
end
