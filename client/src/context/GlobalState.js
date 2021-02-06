import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
const uuid = require('uuid');

const initialState = {
  savedItems: [
    {id: uuid.v4(), keyword: 'IU', videoId: ['0-q1KafFCLU', 'nM0xDI5R50E', 'd9IxdwEFk1c', 'TgOu00Mf3kI', 'D1PvIWdJ8xo']},
    {id: uuid.v4(), keyword: 'BTOB', videoId: ['cXcUXWL1mJA', '__BFUf_nJl0', 'wDkjWSt3HOM', 'FmuHZa6DQOc', 'JBEdgsea9sM']}
  ],
  message: ''
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function addKeyword (item) {
    dispatch({
      type: 'ADD_KEYWORD',
      payload: item
    });
  }

  function notification (message) {
    dispatch({
      type: 'PRINT_NOTIFICATION',
      payload: message
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        savedItems: state.savedItems,
        message: state.message,
        addKeyword,
        notification
      }}>
      {children}
    </GlobalContext.Provider>
  );
};