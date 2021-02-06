import React, {useContext} from 'react';
import classes from './KeywordList.module.css';
import {GlobalContext} from '../context/GlobalState';

export const KeywordList = () => {
  const {savedItems} = useContext(GlobalContext);

  return (
    <div className='mt-4'>
      <p>Click on keyword to see the latest videos</p>
      <ul className={classes.list}>
        {savedItems.map(item =>
          <li key={item.id}>{item.keyword}</li>)}
      </ul>
    </div>
  );
};
