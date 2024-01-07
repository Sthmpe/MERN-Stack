import ReactDOM from 'react-dom/client';
import List from './components/list';
import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Link from '@mui/material/Link';
import { ThemeProvider, createTheme } from '@mui/material/styles';




const theme = createTheme({
	palette: {
		primary: {
			main: '#142c65', // Customize your primary color
		},
		background: {
			default: '#ffffff',
			secondary: '#142c65',
			dark: '#212529',
		},
		text: {
			primary: '#ffffff',
			secondary: '#000000',
		},
	},
});


function App() {
	const [darkMode, setDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	const buttonStyle = {
		marginTop: '5px',
		marginBottom: '5px',
		border: 'none',
	};
	
	return(
		<ThemeProvider theme={theme}>
			<Container disableGutters={true} sx={{
				bgcolor: darkMode ? 'background.dark' : 'background.default',
				color: darkMode ? 'text.secondary' : 'text.primary',
				zIndex: 'fab',
			}}>
				<Box sx={{ flexGrow: 1 }}>
					<AppBar position='static'>
						<Toolbar variant='dense'>
							<Typography variant='h6' color='inherit' component='div'>
								RICK AND MORTY
							</Typography>
							<IconButton sx={{ marginLeft: 0 }}>
								<Link href='https://www.github.com/Sthmpe'>
									<Button sx={{buttonStyle}}>
										<GitHubIcon />
									</Button>
								</Link>
							</IconButton>
							<IconButton sx={{ marginLeft: 0 }}>
								<Button onClick={toggleDarkMode} sx={buttonStyle}>
									{darkMode ? <LightModeIcon /> : <DarkModeIcon />}
								</Button>
							</IconButton>
						</Toolbar>
					</AppBar>
				</Box>
				<List />
			</Container>
		</ThemeProvider>
	);
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App/>);
