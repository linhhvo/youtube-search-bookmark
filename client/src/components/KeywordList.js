import React, {useContext, useEffect} from 'react';
import classes from './KeywordList.module.css';
import {GlobalContext} from '../context/GlobalState';
import {Keyword} from './Keyword';

export const KeywordList = () => {
  const {instruction, savedItems, getKeywordList} = useContext(GlobalContext);

  useEffect(() => {
    getKeywordList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='mt-4'>
      <p>{instruction}</p>

      <div className={classes.list}>
        {savedItems.map(item =>
          <Keyword key={item._id} keyword={item.keyword} />)}
      </div>
    </div>
  );
};
