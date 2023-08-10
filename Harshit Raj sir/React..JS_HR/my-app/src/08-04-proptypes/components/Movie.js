import React from 'react';
import PropTypes from 'prop-types';

function Movie({ element }) {
  return element;
}

Movie.propTypes = {
  element: PropTypes.node
  // element: PropTypes.string -> Gives error
  // element: PropTypes.element -> No error but node is better for components passed as props
  // element: PropTypes.object -> No error but node is better for components passed as props
}

export default Movie;