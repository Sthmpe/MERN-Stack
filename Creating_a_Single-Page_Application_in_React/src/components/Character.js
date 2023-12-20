function Character(character) {
	return (
		<div className='col-3'>
			<div className='card mb-3'>
				<div className='row g-3'>
					<img 
						src={character.image} 
						alt={character.name}
						className='img-fluid card-img-top'
					/>
					<div className='card-body'>
						<h3 className='card-header'>{character.name}</h3>
						<ul>
							<li>{`Status: ${character.status}`}</li>
							<li>{`Species: ${character.species}`}</li>
							<li>{`Type: ${character.type}`}</li>
							<li>{`Gender: ${character.gender}`}</li>
							<li>{`Origin: ${character.origin && character.origin.name}`}</li>
						</ul>
						
					</div>
				</div>
			</div>
		</div>
	);
}

export default Character;
