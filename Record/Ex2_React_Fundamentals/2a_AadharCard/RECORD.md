Exercise 2a: Interactive Aadhaar Card Viewer

Aim
To build an interactive Aadhaar card viewer web application using React that takes user input and renders a styled Aadhaar card component.

Procedure
1. Set up a standalone HTML file with React 18 and Babel loaded via CDN links for in-browser JSX compilation.
2. Create an input form component with fields for Name, DOB, Gender, Address, and Aadhaar number using React `useState` hook.
3. Build an `AadhaarCard` component that displays the entered details in a card layout resembling an official Aadhaar card with header, photo placeholder, and formatted number.
4. Implement form validation to ensure all fields are filled and the Aadhaar number is exactly 12 digits before generating the card.
5. On clicking "Generate Aadhaar Card", pass the form data as props to the AadhaarCard component which renders below the form.

Result
The Aadhaar card viewer application was successfully built using React with CDN, rendering a styled card on valid form submission.
The application demonstrates React component composition, state management with hooks, and prop-based data flow.
