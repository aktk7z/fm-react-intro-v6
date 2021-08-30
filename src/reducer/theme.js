export const themeReducer = (state = "darkblue", action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return action.payload;
    default:
      return state;
  }
};
