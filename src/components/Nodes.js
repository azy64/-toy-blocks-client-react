/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import Blocks from './Blocks';

export default function Nodes({ name, url, listBlocks }) {
  const [clicked, setClicked] = React.useState(false);
  // eslint-disable-next-line max-len
  const displayBlocks = () => listBlocks.map((block, index) => <Blocks key={index} id={block.id} description={block.attributes.data} />);
  return (
    <div className="node">
      <div className="node-header">
        <div className="node-header-left">
          <div className="server-name">{name}</div>
          <div className="server-url">{url}</div>
        </div>
        <div className="node-header-right">
          <div>
            <span className={listBlocks.length > 0 ? 'spin connected' : 'spin off'}>.</span>
            <span className="status">
              {' '}
              {listBlocks.length > 0 ? 'ONLINE' : 'OFFLINE'}
            </span>
            <button onClick={() => setClicked(!clicked)} type="button" className="button-press">
              {clicked ? <>&#8963;</> : <>&#8964;</> }
            </button>
          </div>
        </div>
      </div>
      <div className={clicked ? 'opened' : 'closed'}>
        {
            displayBlocks()
        }
      </div>
    </div>
  );
}
Nodes.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  listBlocks: PropTypes.instanceOf(Array).isRequired,
};
