export const animalReducer = (state = "dog", action) => {
  switch (action.type) {
    case "CHANGE_ANIMAL":
      return action.payload;
    default:
      return state;
  }
};
