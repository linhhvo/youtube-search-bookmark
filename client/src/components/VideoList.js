import React, {Fragment, useContext} from 'react';
import classes from './VideoList.module.css';
import {Video} from './Video';
import {GlobalContext} from '../context/GlobalState';

export const VideoList = () => {
  const {displayedItem} = useContext(GlobalContext);

  let videos = Object.keys(displayedItem).length !== 0 ? <Video key={displayedItem.keyword} videoIds={displayedItem.videoIds} /> : null;

  return (
    <div>
      {videos}
    </div>
  );
};
