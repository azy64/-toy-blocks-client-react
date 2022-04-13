import React from 'react';
import PropTypes from 'prop-types';

export default function Blocks({ id, description }) {
  return (
    <div className="blocks">
      <div className="title">
        {id}
      </div>
      <div className="description">
        {description}
      </div>
    </div>
  );
}

Blocks.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
