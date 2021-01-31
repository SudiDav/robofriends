import React from 'react';

const SearchBox =({searchfield, searchChange}) => {
    return(
        <div className='pa2'>
            <input 
                className='pa3 ba b--light bg-light-blue br10'
                type='search' 
                placeholder='search robots'
                onChange={searchChange}
                />
        </div>
    );
}

export default SearchBox;