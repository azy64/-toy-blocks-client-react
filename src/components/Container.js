import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Nodes from './Nodes';
import url from '../redux/constants/Constants';

export default function Container() {
  const [nodes, setNodes] = useState([]);
  const { thawing, loaded } = useSelector((state) => state.blocksReducer);
  const { thawingStatus, loadedStatus } = useSelector((state) => state.statusReducer);
  console.log('thawing!!!!!:', thawing);
  console.log('loaded:', loaded);
  const calmBlocks = useSelector((state) => state.blocksReducer.calm);
  const calmStatus = useSelector((state) => state.statusReducer.calmStatus[0]);

  const secretBlocks = useSelector((state) => state.blocksReducer.secret);
  const secretStatus = useSelector((state) => state.statusReducer.secretStatus[0]);
  // console.log('####', calmBlocks);
  let i = 0;
  const returnData = () => url().map((server) => {
    i += 1;
    if (server.name === 'Thawing Springs') {
      return (
        <Nodes
          key={i}
          name={thawingStatus[0]?.node_name}
          url={server.url}
          listBlocks={thawing}
        />
      );
    }
    if (server.name === 'Secret Lowlands') {
      return (
        <Nodes
          key={i}
          name={secretStatus?.node_name}
          url={server.url}
          listBlocks={secretBlocks}
        />
      );
    }
    if (server.name === 'Calm Anchorage') {
      return (
        <Nodes
          key={i}
          name={calmStatus?.node_name}
          url={server.url}
          listBlocks={calmBlocks}
        />
      );
    }
    return (
      <Nodes
        key={i}
        name="Node 4"
        url={server.url}
        listBlocks={[]}
      />
    );
  });
  useEffect(() => {
    if (nodes.length === 0) setNodes(returnData());
  }, []);
  return (
    <div className="container">
      <div className="header">
        <h1>Nodes</h1>
        { loaded && loadedStatus ? nodes : ''}
      </div>
    </div>
  );
}
