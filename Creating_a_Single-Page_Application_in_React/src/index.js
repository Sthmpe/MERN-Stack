import ReactDOM from 'react-dom/client';
import List from './components/list';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	const []
	
	return(
		<div className='container' data-bs-theme='bs-body-bg'>
			<nav className='navbar stixk-top navbar-light bg-dark'>
				<h1 className='navbar-brand text-light'>RICK AND MORTY</h1>
			</nav>
			<List />
		</div>
	);
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(<App/>);
