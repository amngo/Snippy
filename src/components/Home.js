import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className='hero is-primary is-medium'>
      <div className='hero-body'>
        <div className='container'>
          <h1 className='title'>A URL Shortening Service</h1>
          <h2 className='subtitle'>
            Generate short aliases for long URLs. Create an account to get started!
          </h2>
          <Link
            to='/register'
            className='button is-primary is-inverted is-outlined is-medium'
          >
            Register for free
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
