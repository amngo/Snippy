import React from 'react';
import { connect } from 'react-redux';

const OverviewSection = ({ links }) => {
  let totalClicks = links
    ? links.reduce((sum, { clicks }) => sum + clicks, 0)
    : 0;
  let totalLinks = links ? links.length : 0;

  return (
    <section className='flex flex-wrap w-full mb-6'>
      <div className='w-full px-4'>
        <div className='border shadow'>
          <div className='flex justify-between px-6 -mb-px bg-blue-600'>
            <h3 className='text-white py-4 font-normal text-lg'>Overview</h3>
          </div>
          <div>
            <div className='text-center px-6'>
              <div className='py-8'>
                <div className='flex flex-wrap'>
                  <div className='text-center w-full sm:w-1/2 mb-2 sm-mb-0'>
                    <div className='text-grey-700 mb-1'>
                      <span className='text-4xl'>{totalLinks}</span>
                    </div>
                    <div className='text-sm uppercase text-grey tracking-wide'>
                      Total Links
                    </div>
                  </div>
                  <div className='text-center w-full sm:w-1/2'>
                    <div className='text-grey-700 mb-1'>
                      <span className='text-4xl'>{totalClicks}</span>
                    </div>
                    <div className='text-sm uppercase text-grey tracking-wide'>
                      Total Clicks
                    </div>
                  </div>
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

export default connect(mapStateToProps)(OverviewSection);
