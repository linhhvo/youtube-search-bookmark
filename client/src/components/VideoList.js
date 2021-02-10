import React, {Fragment, useContext} from 'react';
import classes from './VideoList.module.css';
import {Video} from './Video';
import {GlobalContext} from '../context/GlobalState';

export const VideoList = () => {
  const {displayedItem} = useContext(GlobalContext);

  let videos = Object.keys(displayedItem).length !== 0 ? <Video key={displayedItem.keyword} videoIds={displayedItem.videoIds} /> : null;

  // let videos = displayedItem !== undefined ? <Video key={displayedItem.keyword} videoIds={displayedItem.videoIds} /> : null;

  // let videos = displayedItem !== undefined ? displayedItem.videoIds : null;
  // // };

  return (
    <div>
      {videos}
    </div>
    // <div className={classes.container}>
    //   {videoIds.map(videoId =>
    //     <iframe key={videoId} width="356" height="200" src={"https://www.youtube.com/embed/" + videoId} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    //   )}
    // </div >
  );
};
