export default (state, action) => {
  switch (action.type) {
    case 'ADD_KEYWORD':
      return {
        ...state,
        savedItems: [...state.savedItems, action.payload.data],
        message: action.payload.message
      };
    case 'DISPLAY_VIDEOS':
      return {
        ...state,
        displayedItem: action.payload
      };
    // case 'PRINT_NOTIFICATION':
    //   return {
    //     ...state,
    //     message: action.payload
    //   };
    case 'VIDEO_ERROR':
      return {
        ...state,
        error: action.payload.error,
        message: action.payload.message
      };
    default:
      return state;
  }
}