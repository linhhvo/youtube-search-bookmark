import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';


export const Keyword = (props) => {
  const {loadSpinner, displayActiveItem} = useContext(GlobalContext);

  const keywordClickHandler = event => {
    loadSpinner();

    displayActiveItem(event.target.innerText);
  };

  return (
    <button onClick={keywordClickHandler}>{props.keyword}</button>
  );
};
