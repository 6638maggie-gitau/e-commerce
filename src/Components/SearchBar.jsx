import React from 'react'

function SearchBar ({setSearch}) {
  return (
    <input 
    type='text'
    placeholder='Search products...'
    className='border p-2 rouned w-full mb-4 '
    onChange={(e) => setSearch(e.target.value)} />
  );
}

export default SearchBar