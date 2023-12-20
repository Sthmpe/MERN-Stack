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
	
	return(
		<div className={`container ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
			<nav className='navbar sticky-top' style={{backgroundColor: '#142c65'}}>
				<h1 className='navbar-brand text-light'>RICK AND MORTY</h1>
				<button className={`btn ${darkMode ? 'btn-light' : 'btn-dark'}`} onClick={toggleDarkMode}>
					<i className={`bi ${darkMode ? 'bi-sun-fill' : 'bi-moon-stars-fill'}`} fontSize='1.5rem'></i>
				</button>
			</nav>
			<List />
		</div>
	);
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App/>);
