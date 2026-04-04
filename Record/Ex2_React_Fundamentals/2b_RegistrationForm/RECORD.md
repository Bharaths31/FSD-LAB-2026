Exercise 2b: User Registration Form (React)

Aim
To create a user registration form using React with form validation, state management using hooks, and conditional rendering of submitted details.

Procedure
1. Set up a standalone HTML file with React 18 and Babel CDN for in-browser JSX compilation.
2. Create a functional component with `useState` hooks to manage form fields (name, email, password, phone, gender, city) and validation errors.
3. Implement a `validate` function that checks for empty fields, valid email format, minimum password length, and 10-digit phone number.
4. On form submission, run validation and either display error messages below each invalid field or show a success message.
5. Use conditional rendering to display a "Registration Details" card below the form only when all fields pass validation.

Result
The React registration form was successfully created with real-time validation and conditional rendering of user details.
The application demonstrates React hooks (useState), controlled components, and form handling patterns.
