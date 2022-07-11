const LOAD_ALL_DATA = 'nasaAPI/nasaImage/LOAD_ALL_DATA';
const LOAD_ONE_DATA = 'nasaAPI/nasaImage/LOAD_ONE_DATA';
const LOAD_PIC_DATA = 'nasaAPI/nasaImage/LOAD_PIC_DATA';

const initialState = {
  allData: [],
  oneData: [],
  picData: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ALL_DATA:
      return { ...state, allData: [...action.payload] };
    case LOAD_ONE_DATA:
      return { ...state, oneData: [...action.payload] };
    case LOAD_PIC_DATA:
      return { ...state, picData: [...action.payload] };
    default:
      return state;
  }
};

export const loadAllData = (apiState) => ({
  type: LOAD_ALL_DATA,
  payload: apiState,
});

export const loadOneData = (apiState) => ({
  type: LOAD_ONE_DATA,
  payload: apiState,
});

export const loadPicData = (apiState) => ({
  type: LOAD_PIC_DATA,
  payload: apiState,
});
export default reducer;
