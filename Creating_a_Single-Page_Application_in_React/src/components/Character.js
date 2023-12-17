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
						<p>{`Origin: ${character.origin && character.origin.name}`}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Character;
