export default (state, action) => {
  switch (action.type) {
    case 'ADD_KEYWORD':
      return {
        ...state,
        savedItems: [...state.savedItems, action.payload],
      };
    case 'DISPLAY_VIDEOS':
      return {
        ...state,
        activeItem: action.payload
      };
    case 'PRINT_NOTIFICATION':
      return {
        ...state,
        message: action.payload
      };
    default:
      return state;
  }
}