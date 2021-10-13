Rails.application.routes.draw do
  get :properties, action: :index, controller: 'properties'
end
