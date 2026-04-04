Exercise 5d: Course Filter Route

Aim
To create an Express GET route that filters and returns trainees enrolled in a specific course using URL parameters and MongoDB queries.

Procedure
1. Set up an Express server connected to MongoDB Atlas (training_institute_db) with the Trainee schema defined.
2. Create a GET route at `/api/trainees/course/:courseName` that extracts the course name from `req.params.courseName`.
3. Use `Trainee.find({ courseRegistered: courseName })` to query the database for trainees matching the specified course.
4. Return the filtered results as a JSON array, so querying `/api/trainees/course/React` returns only React students.
5. Test the route by first adding trainees via POST and then filtering by different course names to verify correct results.

Result
The course filter route was successfully created, returning only trainees enrolled in the specified course from the URL parameter.
The route correctly queries MongoDB using the courseName parameter and returns an empty array if no trainees match the filter.
