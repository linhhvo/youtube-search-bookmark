import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';


const initialState = {
  savedItems: [],
  message: '',
  displayedItem: {}
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions

  // Add entered keyword to the saved keyword list
  function addKeyword (item) {
    dispatch({
      type: 'ADD_KEYWORD',
      payload: item
    });
  }

  // Display videos of the selected keyword
  async function displayActiveItem (keyword) {
    try {
      // Trigger get videos from back end
      const response = await axios.get(`/${keyword}`);

      dispatch({
        type: 'DISPLAY_VIDEOS',
        payload: {
          keyword: keyword,
          videoIds: response.data
        }
      });

    } catch (error) {
      dispatch({
        type: 'VIDEO_ERROR',
        payload: error.response.data.error
      });
    }
  }

  // Print message when add keyword to the saved list
  // Might replace this with database model validation
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
        activeItem: state.activeItem,
        addKeyword,
        notification,
        displayActiveItem
      }}>
      {children}
    </GlobalContext.Provider>
  );
};