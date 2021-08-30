import { combineReducers } from "redux";
import { locationReducer } from "./location";
import { breedReducer } from "./breed";
import { animalReducer } from "./animal";
import { themeReducer } from "./theme";

export const rootReducer = combineReducers({
  location: locationReducer,
  breed: breedReducer,
  animal: animalReducer,
  theme: themeReducer,
});