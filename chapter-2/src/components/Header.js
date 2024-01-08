import Link from './Link';
import './Header.css';

function Header({logo}) {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<Link url={"https://reactjs.org"} title={"Learn React"}/>
			</header>
		</div>
	);
}

export default Header;