import React from 'react';

const SearchBox = ({searchChange})=>{
    return (
        <input 
        className='pa2 ba b--green bg-lightest-blue' 
        type='search' 
        placeholder='search Robots'
        onChange={searchChange}
        />
    )
}

export default SearchBox;