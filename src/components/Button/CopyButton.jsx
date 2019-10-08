import React from 'react';

const CopyButton = ({ id }) => {
  return (
    <button className='bg-transparent focus:outline-none hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded text-xs mr-2'>
      Copy
    </button>
  );
};

export default CopyButton;
