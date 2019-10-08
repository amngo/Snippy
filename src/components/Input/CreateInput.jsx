import React, { Component } from 'react';
import parseTitle from '../../utils/parseTitle';

export default class CreateInput extends Component {
  state = {
    url: '',
    title: ''
  };

  handleChange = e => {
    this.setState({ url: e.target.value }, async () => {
      const title = await parseTitle(this.state.url);
      this.setState({ title });
    });
  };

  render() {
    return (
      <form className='w-full'>
        <div className='flex mb-6'>
          <div className='w-full'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='url'
            >
              URL
            </label>
            <textarea
              className='text-xs resize-none bg-gray-200 block appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-600'
              id='url'
              name='url'
              type='text'
              rows='12'
              onChange={this.handleChange}
              value={this.state.url}
            />
          </div>
        </div>
        <div className='flex mb-6'>
          <div className='w-full'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='title'
            >
              Title
            </label>
            <textarea
              className='text-xs resize-none bg-gray-200 block appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-600'
              id='title'
              name='title'
              type='text'
              rows='3'
              value={this.state.title}
              readOnly
            />
          </div>
        </div>

        <div className='w-full'>
          <button
            className='shadow bg-blue-500 hover:bg-blue-400 focus:outline-none text-white font-bold py-2 px-4 rounded'
            type='button'
          >
            Create
          </button>
        </div>
      </form>
    );
  }
}
