Exercise 3a: Theme Toggle using React Context

Aim
To develop a React application with a theme toggle switch that switches between light and dark modes using React Context API for global state management.

Procedure
1. Set up a standalone HTML file with React 18 and Babel CDN, and define CSS classes for both light and dark themes.
2. Create a `ThemeContext` using `React.createContext()` and a `ThemeProvider` component that manages the theme state with `useState`.
3. Implement a `toggleTheme` function in the provider that switches between 'light' and 'dark' and updates the document body class.
4. Build a `Navbar` component that consumes the context via `useContext` and renders a toggle button displaying the current mode.
5. Create a `Content` component that reads the theme from context and displays themed cards with information about how the Context API works.

Result
The theme toggle application was successfully built using React Context API, enabling seamless switching between light and dark modes.
All child components correctly consume the global theme state without prop drilling, demonstrating effective use of createContext and useContext hooks.
