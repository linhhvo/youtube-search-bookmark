import React from 'react';
import classes from './Keyword.module.css';
import {GlobalContext} from '../context/GlobalState';



export const Keyword = () => {
  const {savedItems, displayActiveItem, getKeywordList} = useContext(GlobalContext);

  return (
    <div>

    </div>
  );
};
