import React from 'react';
import { connect } from 'react-redux';
import { deleteLink } from '../../redux/link/actions';

const DeleteButton = ({ deleteLink, id }) => {
  return (
    <button
      onClick={() => deleteLink(id)}
      className='bg-transparent focus:outline-none hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-2 border border-red-500 hover:border-transparent rounded text-xs'
    >
      Delete
    </button>
  );
};

export default connect(
  null,
  { deleteLink }
)(DeleteButton);
