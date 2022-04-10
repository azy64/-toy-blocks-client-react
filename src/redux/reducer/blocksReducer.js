import url, { endPointUrl } from '../constants/Constants';

const init = {
  thawing: [],
  secret: [],
  calm: [],
  node: [],
  loaded: false,
};

const blocksReducer = (state = init, action) => {
  switch (action.type) {
    case 'FETCH_THAWING_BLOCKS':
      return {
        ...state,
        loaded: true,
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

export const fetchThawingBlocks = () => async (dispatch) => {
  try {
    const res = await fetch(`${url()[0].url}${endPointUrl().BLOCKS}`);
    const blocks = await res.json();
    dispatch(getThawingBlocks(blocks.data));
  } catch (err) {
    dispatch({ type: 'FETCH_THAWING_BLOCKS_ERROR' });
  }
};
export const fetchSecretBlocks = () => async (dispatch) => {
  try {
    const res = await fetch(`${url()[1].url}${endPointUrl().BLOCKS}`);
    const blocks = await res.json();
    dispatch(getSecretBlocks(blocks.data));
  } catch (err) {
    dispatch({ type: 'FETCH_SECRET_BLOCKS_ERROR' });
  }
};

export const fetchCalmBlocks = () => async (dispatch) => {
  try {
    const res = await fetch(`${url()[2].url}${endPointUrl().BLOCKS}`);
    const blocks = await res.json();
    dispatch(getCalmBlocks(blocks.data));
  } catch (err) {
    dispatch({ type: 'FETCH_CALM_BLOCKS_ERROR' });
  }
};
export default blocksReducer;
