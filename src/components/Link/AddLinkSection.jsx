import React, { Component } from 'react';
import CreateInput from '../Input/CreateInput';

export default class AddLinkSection extends Component {
  render() {
    return (
      <section className='lg:w-1/3 w-full mb-6'>
        <div className='px-4'>
          <div className='border shadow'>
            <div className='px-6 bg-blue-600'>
              <h3 className='text-white py-4 font-normal text-lg'>
                Create Link
              </h3>
            </div>
            <div>
              <div className='px-6 py-4'>
                <div className='py-4'>
                  <CreateInput />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
