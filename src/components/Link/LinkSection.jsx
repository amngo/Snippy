import React from 'react';
import LinkItem from './LinkItem';
import { connect } from 'react-redux';
import SearchInput from '../Input/SearchInput';

const LinkSection = ({ links }) => {
  return (
    <section className='lg:w-2/3 w-full mb-6'>
      <div className='px-4 h-full'>
        <div className='border shadow h-full'>
          <div className='px-6 bg-blue-600'>
            <h3 className='text-white py-4 font-normal text-lg'>Your Links</h3>
          </div>
          <div>
            <div className='px-6 py-4'>
              <div className='py-4'>
                <SearchInput />
                <div className='overflow-auto'>
                  {links &&
                    links.map(
                      link =>
                        !link.hidden && <LinkItem key={link.id} {...link} />
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = state => {
  return {
    links: state.link.links
  };
};

export default connect(mapStateToProps)(LinkSection);
