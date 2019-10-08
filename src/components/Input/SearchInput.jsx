import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterLinks } from '../../redux/link/actions';

class SearchInput extends Component {
  state = {
    query: ''
  };

  handleChange = e => {
    this.setState({ query: e.target.value }, () =>
      this.props.filterLinks(this.state.query)
    );
  };

  render() {
    return (
      <input
        onChange={this.handleChange}
        className='bg-gray-200 block appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-600'
        value={this.state.query}
        name='query'
        type='text'
        placeholder='Search by title...'
      />
    );
  }
}

export default connect(
  null,
  { filterLinks }
)(SearchInput);
