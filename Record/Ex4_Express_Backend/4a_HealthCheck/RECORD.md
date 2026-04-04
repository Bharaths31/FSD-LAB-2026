Exercise 4a: Health Check Route

Aim
To create a simple Express.js server with a health-check route that returns a 200 OK status and a JSON message confirming the server is running.

Procedure
1. Initialize a Node.js project and install Express.js as a dependency using `npm install express`.
2. Create the server file (`app.js`) and import Express to set up a basic HTTP server.
3. Define a GET route at `/api/health` that responds with a 200 status code and JSON body `{ "status": "Server is running smoothly" }`.
4. Configure the server to listen on port 3000 and log a confirmation message with the server URL.
5. Test the route by running `node app.js` and accessing `http://localhost:3000/api/health` in a browser or using `curl`.

Result
The Express server was successfully created with a health-check endpoint at GET /api/health returning a 200 OK response.
The JSON response `{ "status": "Server is running smoothly" }` confirms the server is operational and ready to handle requests.
