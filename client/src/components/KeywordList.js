import React, {useContext} from 'react';
import classes from './KeywordList.module.css';
import {GlobalContext} from '../context/GlobalState';

export const KeywordList = () => {
  const {savedItems, displayActiveItem} = useContext(GlobalContext);

  const keywordClickHandler = event => {

    // const selectedItem = savedItems.find(item => item.keyword === event.target.innerText);

    displayActiveItem(event.target.innerText);
  };

  return (
    <div className='mt-4'>
      <p>Click on keyword to see the latest videos</p>
      <div className={classes.list}>
        {savedItems.map(item =>
          <button onClick={keywordClickHandler} key={item.id}>{item.keyword}</button>)}
      </div>
    </div>
  );
};
