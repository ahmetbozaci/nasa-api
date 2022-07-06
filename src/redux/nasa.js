const LOAD_DATA = 'nasaAPI/nasaImage/LOAD_DATA';
const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return action.payload;
    default:
      return state;
  }
};

export const loadData = (apiState) => ({
  type: LOAD_DATA,
  payload: apiState,
});

export default reducer;
