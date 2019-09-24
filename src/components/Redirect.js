import React, { Component } from 'react';
import axios from 'axios';
import config from '../config';

export default class Redirect extends Component {
  state = {
    error: false
  };

  async componentDidMount() {
    try {
      const result = await axios.get(
        `https://cors-anywhere.herokuapp.com/${config.api.invokeUrl}/link${this.props.match.url}`
      );

      window.location = result.data.url;
    } catch (error) {
      this.setState({ error: true });
    }
  }

  render() {
    return (
      <section
        className={`hero is-large ${
          this.state.error ? 'is-danger' : 'is-info'
        }`}
      >
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title'>
              {this.state.error ? 'Link does not exist' : 'Redirecting you...'}
            </h1>
          </div>
        </div>
      </section>
    );
  }
}
