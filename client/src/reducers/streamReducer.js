import _ from "lodash";
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_STREAM":
      return { ...state, [action.payload.id]: action.payload };
    case "CREATE_STREAM":
      return { ...state, [action.payload.id]: action.payload };
    case "EDIT_STREAM":
      return { ...state, [action.payload.id]: action.payload };
    case "DELETE_STREAM":
      return _.omit(state, action.payload);
    case "FETCH_STREAMS":
      return { ...state, ..._.mapKeys(action.payload, "id") };

    default:
      return state;
  }
};
///map key's is a function from lodash library ,what it does is take an array of objects and convert them into object with key as we defined it in the arguments
