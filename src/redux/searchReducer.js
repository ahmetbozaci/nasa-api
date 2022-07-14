//! Action Type

const LOAD_ALL_DATA = 'nasaAPI/nasaImage/LOAD_ALL_DATA';
const LOAD_ONE_DATA = 'nasaAPI/nasaImage/LOAD_ONE_DATA';
const LOAD_ASSETS = 'nasaAPI/nasaImage/LOAD_ASSETS';

//! State
const initialState = {
  allData: [],
  oneData: [],
  assets: [],
};

//! Reducer
const reducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case LOAD_ALL_DATA:
      return { ...state, allData: [...payload] };
    case LOAD_ONE_DATA:
      return { ...state, oneData: [...payload] };
    case LOAD_ASSETS:
      return { ...state, assets: [...payload] };
    default:
      return state;
  }
};

//! Actions
const loadAllData = (apiState) => ({
  type: LOAD_ALL_DATA,
  payload: apiState,
});

const loadOneData = (apiState) => ({
  type: LOAD_ONE_DATA,
  payload: apiState,
});

const loadAssets = (apiState) => ({
  type: LOAD_ASSETS,
  payload: apiState,
});

export default reducer;
export { loadAllData, loadOneData, loadAssets };
