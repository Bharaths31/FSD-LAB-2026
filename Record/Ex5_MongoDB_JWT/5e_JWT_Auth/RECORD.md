Exercise 5e: JWT Authentication

Aim
To secure an API endpoint using JSON Web Tokens (JWT) so that only authenticated administrators can access the trainees list, with a React frontend to handle login and token-based requests.

Procedure
1. Set up an Express server with Mongoose, JWT (`jsonwebtoken`), and CORS enabled, connected to MongoDB Atlas (training_institute_db).
2. Create a POST `/api/login` route that validates admin credentials and returns a signed JWT token with a 1-hour expiry.
3. Create an `authenticateToken` middleware that extracts the Bearer token from the Authorization header, verifies it using `jwt.verify()`, and blocks access with 401/403 errors if the token is missing or invalid.
4. Apply the `authenticateToken` middleware to the GET `/api/trainees` route to protect it so only logged-in admins can access the trainee list.
5. Build a React frontend (using CDN) with a login form that stores the JWT token, then uses it in the Authorization header when fetching the protected trainees endpoint.

Result
The API endpoint was successfully secured using JWT authentication, blocking unauthorized access to the trainees list.
The React frontend correctly handles login, stores the token, and passes it as a Bearer token to access the protected route.
