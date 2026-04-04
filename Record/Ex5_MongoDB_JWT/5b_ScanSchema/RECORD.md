Exercise 5b: Mongoose Scan Schema

Aim
To define a Mongoose schema for a Scan document with required fields, default values, and create Express routes to add and retrieve scan records from MongoDB.

Procedure
1. Set up an Express server with Mongoose connected to MongoDB Atlas (patient_scans_db) and enable JSON body parsing.
2. Define a Mongoose schema for `Scan` with fields: `patientName` (String, required), `scanType` (String, required), `scanDate` (Date, default: current date), and `resultStatus` (String, default: 'Pending').
3. Create a Mongoose model from the schema using `mongoose.model('Scan', scanSchema)`.
4. Implement a POST `/api/scans` route that creates and saves a new Scan document from the request body, returning a 201 status on success.
5. Implement a GET `/api/scans` route that retrieves all scan documents from the database and returns them as a JSON array.

Result
The Mongoose Scan schema was successfully defined with required validations and default values for scanDate and resultStatus.
Scan documents can be created via POST and retrieved via GET, with data persisting in the MongoDB Atlas cloud database.
