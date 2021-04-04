import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import ContactReducer from "./ContactReducer";

export default combineReducers({
  form: formReducer,
  contacts: ContactReducer,
});
