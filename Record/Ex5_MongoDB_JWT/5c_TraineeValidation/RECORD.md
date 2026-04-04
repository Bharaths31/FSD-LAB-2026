Exercise 5c: Trainee Schema with Validation

Aim
To define a Mongoose schema for a Trainee document with robust validation rules and create an Express POST route that handles validation errors gracefully.

Procedure
1. Set up an Express server connected to MongoDB Atlas (training_institute_db) with JSON body parsing enabled.
2. Define a Trainee schema with fields: `fullName` (String, required), `email` (String, required, unique), `courseRegistered` (String, required), and `hasCSEBackground` (Boolean, default: false).
3. Create an Express POST route at `/api/trainees` that attempts to save the request body as a new Trainee document.
4. Implement error handling in the catch block to detect Mongoose `ValidationError` — extract specific error messages and return a 400 Bad Request response.
5. Handle duplicate email errors (MongoDB error code 11000) separately, returning a clear "Email already exists" message with 400 status.

Result
The Trainee schema was successfully defined with required field validations and unique email constraint enforced by MongoDB.
Validation errors are caught and returned as descriptive 400 Bad Request responses, ensuring robust data integrity.
