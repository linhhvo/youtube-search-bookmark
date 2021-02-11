import React, {useContext, useState} from 'react';
import {GlobalContext} from '../context/GlobalState';
import {v4 as uuidv4} from 'uuid';
import classes from './SearchBar.module.css';

export const SearchBar = () => {
  const {message, addKeyword} = useContext(GlobalContext);
  const [keyword, setKeyword] = useState('');

  const addItem = event => {
    event.preventDefault();

    // const foundIndex = savedItems.findIndex(item => item.keyword.toLowerCase() === keyword.toLowerCase());

    // if (foundIndex === -1 && keyword !== '') {
    //   const newItem = keyword;

    //   addKeyword(newItem);

    //   notification('Keyword added!');
    // } else if (keyword === '') {
    //   notification('Keyword can\'t be empty.');
    // } else {
    //   notification('Keyword already existed');
    // }

    const newItem = {keyword};

    addKeyword(newItem);
  };
  return (
    <div className={classes.container}>
      <form onSubmit={addItem}>
        <div className='d-grid gap-3 mt-1'>
          <input type='text' className='form-control' onChange={event => setKeyword(event.target.value.trim())} placeholder='Enter search keyword...' />
          <p style={{margin: '0'}}>{message}</p>
          <button className='btn btn-warning'>Add to saved list</button>
        </div>
      </form>
    </div>
  );
};
