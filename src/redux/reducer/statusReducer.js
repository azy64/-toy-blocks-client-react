import url, { endPointUrl } from '../constants/Constants';

const init = {
  thawingStatus: [],
  secretStatus: [],
  calmStatus: [],
  nodeStatus: [],
};

const statusReducer = (state = init, action) => {
  switch (action.type) {
    case 'FETCH_THAWING_STATUS':
      return {
        ...state,
        thawingStatus: [...state.thawingStatus, action.payload],
      };
    case 'FETCH_SECRET_STATUS':
      return {
        ...state,
        secretStatus: [...state.secretStatus, action.payload],
      };
    case 'FETCH_CALM_STATUS':
      return {
        ...state,
        calmStatus: [...state.calmStatus, action.payload],
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

export const fetchThawingStatus = async (dispatch) => {
  fetch(`${url()[0].url}${endPointUrl().BLOCKS}`)
    .then((res) => res.json())
    .then((blocks) => dispatch(getThawingStatus(blocks)));
};

export const fetchSecretStatus = async (dispatch) => {
  fetch(`${url()[1].url}${endPointUrl().BLOCKS}`)
    .then((res) => res.json())
    .then((blocks) => dispatch(getSecretStatus(blocks)));
};

export const fetchCalmStatus = async (dispatch) => {
  fetch(`${url()[2].url}${endPointUrl().BLOCKS}`)
    .then((res) => res.json())
    .then((blocks) => dispatch(getCalmStatus(blocks)));
};
export default statusReducer;
