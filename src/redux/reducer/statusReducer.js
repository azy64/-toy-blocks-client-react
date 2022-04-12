import url, { endPointUrl } from '../constants/Constants';

const init = {
  thawingStatus: {},
  secretStatus: {},
  calmStatus: {},
  nodeStatus: {},
};

const statusReducer = (state = init, action) => {
  switch (action.type) {
    case 'FETCH_THAWING_STATUS':
      return {
        ...state,
        loadedStatus: true,
        thawingStatus: action.payload,
      };
    case 'FETCH_SECRET_STATUS':
      return {
        ...state,
        secretStatus: action.payload,
      };
    case 'FETCH_CALM_STATUS':
      return {
        ...state,
        calmStatus: action.payload,
      };
    default:
      return state;
  }
};

export const getThawingStatus = (data) => ({
  type: 'FETCH_THAWING_STATUS',
  payload: data,
});

export const getCalmStatus = (data) => ({
  type: 'FETCH_CALM_STATUS',
  payload: data,
});

export const getSecretStatus = (data) => ({
  type: 'FETCH_SECRET_STATUS',
  payload: data,
});

export const fetchThawingStatus = () => async (dispatch) => {
  try {
    const rep = await fetch(`${url()[0].url}${endPointUrl().STATUS}`);
    const data = await rep.json();
    dispatch(getThawingStatus(data));
  } catch (err) {
    dispatch({ type: 'FETCH_THAWING_STATUS_ERROR' });
  }
};

export const fetchSecretStatus = () => async (dispatch) => {
  try {
    const rep = await fetch(`${url()[1].url}${endPointUrl().STATUS}`);
    const data = await rep.json();
    dispatch(getSecretStatus(data));
  } catch (err) {
    dispatch({ type: 'FETCH_SECRET_STATUS_ERROR' });
  }
};

export const fetchCalmStatus = () => async (dispatch) => {
  try {
    const rep = await fetch(`${url()[2].url}${endPointUrl().STATUS}`);
    const data = await rep.json();
    dispatch(getCalmStatus(data));
  } catch (err) {
    dispatch({ type: 'FETCH_CALM_STATUS_ERROR' });
  }
};
export default statusReducer;
