import React, {Fragment, useContext} from 'react';
import classes from './VideoList.module.css';
import {Video} from './Video';
import {GlobalContext} from '../context/GlobalState';

export const VideoList = () => {
  const {savedItems} = useContext(GlobalContext);

  return (
    <div>
      {savedItems.map(item =>
        <Video key={item.id} keyword={item.keyword} />
      )}
    </div>
  );
};
