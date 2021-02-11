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

  // Retrieve keyword list from database
  async function getKeywordList () {
    try {
      const response = await axios.get('/api/videos');

      console.log(response.data);
      dispatch({
        type: 'GET_KEYWORDS',
        payload: response.data.data
      });

    } catch (error) {
      dispatch({
        type: 'VIDEO_ERROR',
        payload: error.response.data.error
      });
    }
  }


  // Add entered keyword to the saved keyword list
  async function addKeyword (keyword) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const response = await axios.post('/api/videos', keyword, config);

      dispatch({
        type: 'ADD_KEYWORD',
        payload: response.data
      });

    } catch (error) {
      dispatch({
        type: 'VIDEO_ERROR',
        payload: error.response.data
      });

    }
  }


  // Display videos of the selected keyword
  async function displayActiveItem (keyword) {
    try {
      // Trigger get videos from back end
      const response = await axios.get(`/api/videos/${keyword}`);

      dispatch({
        type: 'DISPLAY_VIDEOS',
        payload: {
          keyword: keyword,
          videoIds: response.data.data
        }
      });

    } catch (error) {
      dispatch({
        type: 'VIDEO_ERROR',
        payload: error.response.data.error
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        savedItems: state.savedItems,
        message: state.message,
        displayedItem: state.displayedItem,
        getKeywordList,
        addKeyword,
        displayActiveItem
      }}>
      {children}
    </GlobalContext.Provider>
  );
};