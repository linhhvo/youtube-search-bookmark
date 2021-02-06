import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import classes from './Video.module.css';

export const Video = (props) => {
  const {savedItems} = useContext(GlobalContext);

  const requestedItem = savedItems.find(item => item.keyword === props.keyword);

  return (
    <div className={classes.container}>
      {requestedItem.videoId.map(videoId =>
        <iframe key={videoId} width="356" height="200" src={"https://www.youtube.com/embed/" + videoId} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      )}

    </div >
  );
};
