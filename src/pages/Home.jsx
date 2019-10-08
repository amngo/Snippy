import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import LinkSection from '../components/Link/LinkSection';
import OverviewSection from '../components/Overview/OverviewSection';
import { getLinks } from '../redux/link/actions';
import AddLinkSection from '../components/Link/AddLinkSection';

class Home extends Component {
  componentDidMount() {
    this.props.getLinks();
  }

  render() {
    return (
      <div className='font-sans flex flex-col min-h-screen'>
        <Navbar />
        <div className='flex flex-col flex-grow container mx-auto sm:px-4 pt-6 pb-8'>
          <OverviewSection />
          <div className='flex flex-grow flex-wrap'>
            <AddLinkSection />
            <LinkSection />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    links: state.link.links,
    loading: state.link.loading,
    error: state.link.error
  };
};

export default connect(
  mapStateToProps,
  { getLinks }
)(Home);
