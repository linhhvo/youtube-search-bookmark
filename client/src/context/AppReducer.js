export default (state, action) => {
  switch (action.type) {
    case 'GET_KEYWORDS':
      return {
        ...state,
        savedItems: action.payload.data,
        instruction: action.payload.instruction
      };
    case 'ADD_KEYWORD':
      return {
        ...state,
        savedItems: [...state.savedItems, action.payload.data],
        message: action.payload.message,
        instruction: action.payload.instruction
      };
    case 'DISPLAY_VIDEOS':
      return {
        ...state,
        displayedItem: action.payload,
        loading: action.loading
      };
    case 'VIDEO_ERROR':
      return {
        ...state,
        error: action.payload.error,
        message: action.payload.message
      };
    case 'LOADING':
      return {
        ...state,
        loading: action.payload.loading
      };
    default:
      return state;
  }
}