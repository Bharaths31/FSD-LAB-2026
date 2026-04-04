Exercise 4d: Validation Middleware

Aim
To create an Express middleware that validates incoming user registration data (email and password) before it reaches the route handler.

Procedure
1. Set up an Express server with JSON body parsing enabled using `express.json()`.
2. Create a middleware function named `validateUser` that extracts `email` and `password` from `req.body`.
3. Inside the middleware, check if the email contains an "@" symbol; if not, return a 400 Bad Request with a specific error message.
4. Check if the password is at least 6 characters long; if not, return a 400 Bad Request with an appropriate error message.
5. If both validations pass, call `next()` to proceed to the POST `/register` route handler which responds with "User Registered Successfully".

Result
The validation middleware was successfully created to validate email format and password length before processing registration.
Invalid requests receive a 400 Bad Request with specific error messages, while valid requests proceed to register the user successfully.
