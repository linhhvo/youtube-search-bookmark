import React from 'react';
import classes from './SearchBar.module.css';

export const SearchBar = () => {
  return (
    <div className={classes.container}>
      <h1 className='display-6'>What do you want to bookmark?</h1>
      <div className='d-grid gap-3 mt-5'>
        <input type='text' className='form-control' placeholder='Enter search keyword...' />
        <button className='btn btn-warning'>Search</button>
      </div>
    </div>
  );
};
