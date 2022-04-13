import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import fetchMock from './fictions-api-mocks';
import { getThawingBlocks, getCalmBlocks, getSecretBlocks } from '../redux/reducer/blocksReducer';
import { getThawingStatus, getCalmStatus, getSecretStatus } from '../redux/reducer/statusReducer';

export default function FakeComponent({ children }) {
  const dispatch = useDispatch();
  const payload = fetchMock();
  useEffect(() => {
    dispatch(getThawingStatus(payload.statusReducer.thawingStatus));
    dispatch(getSecretStatus(payload.statusReducer.secretStatus));
    dispatch(getCalmStatus(payload.statusReducer.calmStatus));
    dispatch(getThawingBlocks(payload.blocksReducer.thawing));
    dispatch(getCalmBlocks(payload.blocksReducer.calm));
    dispatch(getSecretBlocks(payload.blocksReducer.secret));
  }, []);
  return (
    <>{children}</>
  );
}

FakeComponent.propTypes = {
  children: PropTypes.element.isRequired,
};
