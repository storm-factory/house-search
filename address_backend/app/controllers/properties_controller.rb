class PropertiesController < ApplicationController
  def index
    @properties = Property.where("address LIKE ?","%#{property_query}%")
  end


  protected
    def property_query
      params.require(:filter)
    end
end
