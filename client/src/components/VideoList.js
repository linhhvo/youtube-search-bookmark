import React, {Fragment, useContext} from 'react';
import classes from './VideoList.module.css';
import {Video} from './Video';
import {GlobalContext} from '../context/GlobalState';

export const VideoList = () => {
  const {activeItem} = useContext(GlobalContext);

  let videos = Object.keys(activeItem).length !== 0 ? <Video key={activeItem.id} videoIds={activeItem.videoIds} /> : null;

  return (
    <div>
      {videos}
    </div>
  );
};
