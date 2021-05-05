import React from 'react';

const SearchBox = ({searchfield, searchChange})=> {
	return(
		<div className='pa2'>
			<input className='pa3 ba mb b--black-20 w-20'
			 type='search'
			  placeholder='search products'
			  onChange={searchChange} />
		</div>
		
	);
}

export default SearchBox;