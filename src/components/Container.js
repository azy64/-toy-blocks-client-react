import React from 'react';
import { useSelector } from 'react-redux';
import Nodes from './Nodes';
import url from '../redux/constants/Constants';

export default function Container() {
  const { thawing, calm, secret } = useSelector((state) => state.blocksReducer);
  const { thawingStatus, secretStatus, calmStatus } = useSelector((state) => state.statusReducer);
  const SERVER = url();
  function displayData() {
    return SERVER.map((sever) => {
      const { url, name } = sever;
      if (name === 'Thawing Springs') {
        return (
          <Nodes name={name ?? thawingStatus.node_name} url={url} key={name} listBlocks={thawing} />
        );
      }
      if (name === 'Secret Lowlands') {
        return (
          <Nodes name={name ?? secretStatus.node_name} url={url} key={name} listBlocks={secret} />
        );
      }
      if (name === 'Calm Anchorage') {
        return (
          <Nodes name={name ?? calmStatus.node_name} url={url} key={name} listBlocks={calm} />
        );
      }
      return (<Nodes name={name} url={url} key={name} listBlocks={[]} />);
    });
  }

  return (
    <div className="container" data-testid="container">
      <div className="header">
        <h1>Nodes</h1>
        { thawing ? displayData()
          : <div>Loading</div> }
      </div>
    </div>
  );
}
