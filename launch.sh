# npm install -g nodemon
cd ./oj-client
# npm install
ng build --watch &
cd ../oj-server
# npm install
nodemon server.js