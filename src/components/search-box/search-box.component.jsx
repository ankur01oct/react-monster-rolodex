import React from 'react';
import './search-box.component.css';

// detructuring props
export const SearchBox = ({placeholder, handleChange}) => {
    return <input className ='search' type='search' placeholder={placeholder} onChange={handleChange}></input>
}