function Character(character) {
	return (
		<div>
			<h3>{character.name}</h3>
			<img src={character.name} alt={character.name} width='300'/>
			<p>{'Origin: ${character.origin && character.origin.name}'}</p>
		</div>
	);
}

export default Character;
