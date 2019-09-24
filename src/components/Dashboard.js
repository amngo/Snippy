import React, { Component } from 'react';
import Link from './Link';
import { connect } from 'react-redux';
import { getLinks, addLink, removeLink } from '../redux/link/link.actions';

class Dashboard extends Component {
  state = {
    url: ''
  };

  componentDidMount() {
    if (!this.props.isAuthenticated) this.props.history.push('/login');
    this.props.dispatch(getLinks());
  }

  onInputChange = event => {
    this.setState({
      url: event.target.value
    });
  };

  handleSubmit = () => {
    this.props.dispatch(addLink(this.state.url));
    this.setState({ url: '' });
  };

  handleRemove = id => {
    this.props.dispatch(removeLink(id));
  };

  render() {
    return (
      <div className='container my-1'>
        <div className='field has-addons'>
          <div className='control is-expanded'>
            <input
              disabled={this.props.add_link_pending}
              className='input is-medium'
              type='text'
              id='url'
              placeholder='Enter link here'
              value={this.state.url}
              onChange={this.onInputChange}
            />
          </div>
          <div className='control'>
            <button
              disabled={this.props.add_link_pending}
              onClick={this.handleSubmit}
              className={`button is-medium ${
                this.props.add_link_pending ? 'is-loading' : ''
              }`}
            >
              Shorten
            </button>
          </div>
        </div>
        {this.props.links ? (
          this.props.links.map(link => (
            <Link handleRemove={this.handleRemove} key={link.id} {...link} />
          ))
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  links: state.link.links,
  add_link_pending: state.link.add_link_pending,
  get_links_pending: state.link.get_links_pending
});

export default connect(mapStateToProps)(Dashboard);
