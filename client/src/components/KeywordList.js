import React from 'react';
import classes from './KeywordList.module.css';
import {VideoList} from './VideoList';

export const KeywordList = () => {
  return (
    <div className='mt-4'>
      <ul className={classes.list}>
        <li>JavaScript</li>
      </ul>
    </div>
  );
};
