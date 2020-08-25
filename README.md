# ExpressTest

Learning repository for how to use the Express framework

This reads the data.csv in the data folder and returns it in json format through a GET method

## How to install

run `npm install` to install all dependencies

## How to run

`node src/index.js` to start the application

### Endpoints

`localhost:3000/` for the home page

`localhost:3000/api` for main api page

`localhost:3000/api/csvhandler` for main csvhandler api page

`localhost:3000/api/csvhandler/:csvname` to get the data in the csv matching csvname

`localhost:3000/api/jsonhandler` for main jsonhandler api page

`localhost:3000/api/jsonhandler/listUsers` for list of users

`localhost:3000/api/jsonhandler/get/:id` to get a specific user
