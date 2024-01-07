import ReactDOM from 'react-dom/client';
import List from './components/list';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
	const [darkMode, setDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};
	
	const navbarStyle = {
		backgroundColor: '#142c65',
		position: 'sticky',
		top: 0,
		zIndex: 1020,
		border: 'none',
	};

	const navbarBrandStyle = {
		display: 'flexbox',
		fontSize: '1rem',
		marginRight: '5px',
		marginLeft: '5px',
		marginTop: '5px',
		marginBottom: '5px',
	};

	const containerStyle = {
		width: '100%',
		position: 'sticky',
		top: 0,
		zIndex: 1020,
	};

	const buttonStyle = {
		marginTop: '5px',
		marginBottom: '5px',
		background: 'transparent',
		border: 'none',
	};
	
	return(
		<div className={`container-xxl ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`} style={containerStyle}>
			<header className={`navbar navbar-expand-xl sticky-top ${darkMode ? 'bg-dark' : 'bg-light'}`}>
				<nav className='container-xxl text-light' style={navbarStyle}>
					<h3 className='navbar-brand text-light' style={navbarBrandStyle}>RICK AND MORTY</h3>
					<div className='ms-auto'>
						<a href='https://www.github.com/Sthmpe' target='_blank' rel='noopener noreferrer'>
							<button className='btn btn-dark' style={buttonStyle}>
								<i className='bi bi-github' style={{ fontSize: `calc(0.625rem + 1vmin)` }}></i>
							</button>
						</a>
						<a href='https://www.linkedin.com/in/david-olanite-63986924a' target='_blank' rel='noopener noreferrer'>
							<button className='btn btn-dark' style={buttonStyle}>
								<i className='bi bi-linkedin' style={{ fontSize: `calc(0.625rem + 1vmin)` }}></i>
							</button>
						</a>
						<a href='https://twitter.com/This_is_David__' target='_blank' rel='noopener noreferrer'>
							<button className='btn btn-dark' style={buttonStyle}>
								<i className='bi bi-twitter-x' style={{ fontSize: `calc(0.625rem + 1vmin)` }}></i>
							</button>
						</a>
						<button className='btn btn-dark' onClick={toggleDarkMode} style={buttonStyle}>
							<i className={`bi ${darkMode ? 'bi-sun-fill' : 'bi-moon-stars-fill'}`} style={{ fontSize: `calc(0.625rem + 1vmin)` }}></i>
						</button>
					</div>
				</nav>
			</header>
			<List />
		</div>
	);
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App/>);
