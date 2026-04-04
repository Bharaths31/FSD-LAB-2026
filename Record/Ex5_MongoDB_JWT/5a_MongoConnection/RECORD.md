Exercise 5a: MongoDB Connection with Express and Mongoose

Aim
To establish a connection between a Node.js Express server and a MongoDB Atlas cloud database named patient_scans_db using Mongoose.

Procedure
1. Initialize a Node.js project and install `express` and `mongoose` as dependencies using npm.
2. Import Express and Mongoose in `app.js` and define the MongoDB Atlas connection URI with the database name.
3. Use `mongoose.connect(MONGO_URI)` to establish the connection, handling success and error cases with `.then()` and `.catch()`.
4. On successful connection, log a confirmation message and start the Express server on port 3000.
5. Add a root GET route that returns a JSON message confirming the database connection, and test by running `node app.js`.

Result
The Express server was successfully connected to MongoDB Atlas cloud database (patient_scans_db) using Mongoose.
The connection was verified with a confirmation message in the console and a JSON response on the root route.
