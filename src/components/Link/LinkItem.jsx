import React from 'react';
import CopyButton from '../Button/CopyButton';
import DeleteButton from '../Button/DeleteButton';

const LinkItem = ({ title, url, favicon, date_created, clicks, id }) => {
  return (
    <div className='flex items-center mt-6'>
      <img
        className='w-8 h-8 mr-4 flex-none'
        src={favicon}
        alt='Avatar of Jonathan Reinink'
      />

      <div className='text-left truncate w-full'>
        <p className='text-gray-600 text-xs uppercase'>{date_created}</p>
        <p className='text-gray-900 text-lg leading-none truncate mb-1'>
          {title}
        </p>
        <p className='text-gray-700 text-sm mb-1 truncate'>{url}</p>
        <div className='flex items-center justify-between'>
          <div>
            <CopyButton id={id} />
            <DeleteButton id={id} />
          </div>
          <p className='text-gray-600 text-xs'>{clicks} clicks</p>
        </div>
      </div>
    </div>
  );
};

export default LinkItem;
