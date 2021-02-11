import React from 'react';
// import classes from './Video.module.css';

export const Video = (props) => {

  return (
    <iframe width="356" height="200" src={"https://www.youtube.com/embed/" + props.videoId} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  );
};
