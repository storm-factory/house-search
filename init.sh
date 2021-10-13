#!/bin/bash

echo ""
echo "Intializing Rails Backend"
echo ""

cd address_backend

bundle exec rake db:create
bundle exec rake db:migrate
bundle exec rake db:seed
bundle install

echo ""
echo "Intializing React Frontend"
echo ""

cd ../address-frontend

npm install

echo ""
echo "Start backend with start_back_end.sh"
echo ""

echo ""
echo "Start frontend with start_front_end.sh"
echo ""
