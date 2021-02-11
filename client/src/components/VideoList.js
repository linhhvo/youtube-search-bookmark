import React, {useContext, Fragment} from 'react';
import {Video} from './Video';
import {GlobalContext} from '../context/GlobalState';
import classes from './VideoList.module.css';

export const VideoList = () => {
  const {displayedItem} = useContext(GlobalContext);

  let videos = Object.keys(displayedItem).length !== 0 ?
    <div className={classes.container}>
      {displayedItem.videoIds.map(videoId => <Video key={videoId} videoId={videoId} />)}
    </div >
    : null;

  return (
    <Fragment>
      {videos}
    </Fragment>
  );
};
