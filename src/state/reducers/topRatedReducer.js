export default (state = {}, action) => {
  switch (action.type) {
    case 'GET_TOP_RATED':
      return action.payload;
    default:
      return state;
  }
};
