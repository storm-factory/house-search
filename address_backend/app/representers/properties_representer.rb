class PropertiesRepresenter < Roar::Decorator
  include Roar::JSON

  collection :properties, decorator: PropertyRepresenter, class: Property, exec_context: :decorator
end
