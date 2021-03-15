import React from 'react';

const Card = (props) => {
	const {id,email,name} = props;
	return (
		<div className='tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={`https://www.robohash.org/${id}?size=200x200`}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
		);
}

export default Card;