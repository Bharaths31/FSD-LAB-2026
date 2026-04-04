Exercise 4c: Request Logger Middleware

Aim
To create a custom Express middleware that logs every incoming request with timestamp, HTTP method, and URL path for auditing purposes.

Procedure
1. Set up an Express server and define a custom middleware function named `requestLogger`.
2. Inside the middleware, capture the current date/time using `new Date().toISOString()`, the HTTP method (`req.method`), and the URL path (`req.url`).
3. Log the captured information to the console in the format `[timestamp] METHOD /path` (e.g., `[2026-02-19T10:00:00Z] POST /api/scans`).
4. Call the `next()` function at the end of the middleware to pass the request to the actual route handlers.
5. Apply the middleware globally using `app.use(requestLogger)` so it intercepts every incoming request before it reaches any route.

Result
The request logger middleware was successfully created and applied globally to intercept all incoming HTTP requests.
Each request is logged to the console with its timestamp, method, and URL path, enabling effective server-side auditing.
