Exercise 4b: Medical Scan Management System (CRUD)

Aim
To build a backend API for a medical scan management system using Express.js with in-memory CRUD operations for patient appointment bookings.

Procedure
1. Set up an Express server with `express.json()` middleware to parse JSON request bodies, and initialize an in-memory array for storing appointments.
2. Create a POST `/api/scans` route that accepts patientName, scanType, and date from the request body, assigns a unique ID, and returns the created object with a 201 status.
3. Create a GET `/api/scans` route that returns the complete list of all scheduled scan appointments as a JSON array.
4. Create a PUT `/api/scans/:id` route that finds an appointment by ID and updates its details; returns a 404 error if the ID does not exist.
5. Create a DELETE `/api/scans/:id` route that removes a specific appointment from the array and returns a success confirmation message.

Result
The medical scan management API was successfully built with full CRUD operations (Create, Read, Update, Delete) using an in-memory array.
All endpoints were tested and verified to handle valid requests and return appropriate error responses for invalid IDs.
