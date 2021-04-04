import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_CONTACTS":
      return { ...state, ..._.mapKeys(action.payload, "id") }; 
    case "FETCH_CONTACT":
      return { ...state, [action.payload.id]: action.payload }; 
    case "CREATE_CONTACT":
      return { ...state, [action.payload.id]: action.payload };
    case "DELETE_CONTACT":
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
