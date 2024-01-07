import { useEffect, useState } from 'react';
import Character from './Character';
import 'bootstrap/dist/css/bootstrap.css';
import './loadingSpinner.css';

function List() {
	const [loading, setLoading] = useState(true);
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const data = await fetch('https://rickandmortyapi.com/api/character');
			const { results } = await data.json();

			setCharacters(results);
			setLoading(false);
		}

		fetchData();
	}, [characters.length]);

	return(
		<div>
			<h2>Character</h2>
			<div className='row'>
				{loading ? (
					<span>Loading...</span>
				) : (
					characters.map((character) => (
						<Character
							key = {character.id}
							name = {character.name}
							status = {character.status}
							species = {character.species}
							type = {character.type}
							gender = {character.gender}
							origin = {character.origin}
							image = {character.image}
						/>
					))
				)
				}
			</div>
		</div>
	);
}

export default List;
