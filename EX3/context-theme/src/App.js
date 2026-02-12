import React, { createContext, useContext, useMemo, useState } from 'react';

const ThemeContext = createContext({
	theme: 'light',
	toggleTheme: () => {},
});

function ThemeToggle() {
	const { theme, toggleTheme } = useContext(ThemeContext);
	const isDark = theme === 'dark';

	return (
		<button  className="toggle" onClick={toggleTheme} type="button">
			{isDark ? 'Light' : 'Dark'}
      </button>
	);
}

function Content() {
	const { theme } = useContext(ThemeContext);

	return (
		<main className={`app ${theme}`}>
			<section className="card">
				<h1>Click to Change Theme</h1>
				<p>Theme: {theme}</p>
				<ThemeToggle />
			</section>
		</main>
	);
}

export default function App() {
	const [theme, setTheme] = useState('light');

	const value = useMemo(
		() => ({
			theme,
			toggleTheme: () =>
				setTheme((prev) => (prev === 'light' ? 'dark' : 'light')),
		}),
		[theme]
	);

	return (
		<ThemeContext.Provider value={value}>
			<Content />
		</ThemeContext.Provider>
	);
}
