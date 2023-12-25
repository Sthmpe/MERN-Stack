function Character(character) {
	return (
		<div className='col-lg-3 col-md-4 col-sm-6 col-12'>
			<div className='card mb-3 h-20'>
				<div className='row g-3'>
					<img 
						src={character.image} 
						alt={character.name}
						className='img-fluid card-img-top'
					/>
					<div className='card-body'>
						<h3 className='card-title'>{character.name}</h3>
						<ul className='list-unstyled'>
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
