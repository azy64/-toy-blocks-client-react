import url, { endPointUrl } from '../constants/Constants';

const init = {
  thawing: [],
  secret: [],
  calm: [],
  node: [],
};

const blocksReducer = (state = init, action) => {
  switch (action.type) {
    case 'FETCH_THAWING_BLOCKS':
      return {
        ...state,
        thawing: [...state.thawing, action.payload],
      };
    case 'FETCH_SECRET_BLOCKS':
      return {
        ...state,
        secret: [...state.secret, action.payload],
      };
    case 'FETCH_CALM_BLOCKS':
      return {
        ...state,
        calm: [...state.calm, action.payload],
      };
    default:
      return state;
  }
};

export const getThawingBlocks = (data) => ({
  type: 'FETCH_THAWING_BLOCKS',
  payload: data,
});

export const getCalmBlocks = (data) => ({
  type: 'FETCH_CALM_BLOCKS',
  payload: data,
});

export const getSecretBlocks = (data) => ({
  type: 'FETCH_SECRET_BLOCKS',
  payload: data,
});

export const fetchThawingBlocks = async (dispatch) => {
  fetch(`${url()[0].url}${endPointUrl().BLOCKS}`)
    .then((res) => res.json())
    .then((blocks) => dispatch(getThawingBlocks(blocks)));
};

export const fetchSecretBlocks = async (dispatch) => {
  fetch(`${url()[1].url}${endPointUrl().BLOCKS}`)
    .then((res) => res.json())
    .then((blocks) => dispatch(getSecretBlocks(blocks)));
};

export const fetchCalmBlocks = async (dispatch) => {
  fetch(`${url()[2].url}${endPointUrl().BLOCKS}`)
    .then((res) => res.json())
    .then((blocks) => dispatch(getCalmBlocks(blocks)));
};
export default blocksReducer;
