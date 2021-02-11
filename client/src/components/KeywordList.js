import React, {useContext} from 'react';
import classes from './KeywordList.module.css';
import {GlobalContext} from '../context/GlobalState';

export const KeywordList = () => {
  const {savedItems, displayActiveItem} = useContext(GlobalContext);

  const keywordClickHandler = event => {

    displayActiveItem(event.target.innerText);
  };

  return (
    <div className='mt-4'>
      <p>Click on keyword to see the latest videos</p>
      <div className={classes.list}>
        {savedItems.map(item =>
          <button onClick={keywordClickHandler} key={item._id}>{item.keyword}</button>)}
      </div>
    </div>
  );
};
