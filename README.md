# treatment-options-node-server

This project is the NodeJS server implementation of the treatment-options-api

#Running the server

Run the following command in the /nodejs-server-server directory

yarn install

This server optionally uses MongoDB as a backend.

Ensure that MongoDB is installed. Detailed MongoDB installation instructions are available for Windows and Mac OS X. It is recommended to configure MongoDB to start at boot. The Windows page includes instructions to create a Windows service. On OS X, it is recommended to install with brew and follow the instructions to have launchd start it at login.

Run the following script from inside './treatment-options-node-server' directory to insert the hard coded treatment data into MongoDB:

node insertTreatmentData.js

In order to start the server run the following command in the /nodejs-server-server

yarn start

The server will be running at

http://localhost:3001

