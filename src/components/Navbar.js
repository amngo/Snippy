import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../redux/auth/auth.actions';

const Navbar = ({ isAuthenticated, user, dispatch, history }) => {
  const handleLogOut = event => {
    event.preventDefault();
    dispatch(logoutUser(history));
  };

  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <Link className='navbar-item' to='/'>
          Snippy
        </Link>
      </div>

      <div id='navbarBasicExample' className='navbar-menu'>
        <div className='navbar-start'>
          <Link to='/' className='navbar-item'>
            Home
          </Link>
          <Link to='/dashboard' className='navbar-item'>
            Dashboard
          </Link>
        </div>

        <div className='navbar-end'>
          <div className='navbar-item'>
            {isAuthenticated && user && (
              <p>
                Logged in as{' '}
                <span className='has-text-weight-bold'>{user.username}</span>
              </p>
            )}
            <div className='buttons'>
              {!isAuthenticated && (
                <div>
                  <Link to='/register' className='button is-primary'>
                    <strong>Register</strong>
                  </Link>
                  <Link to='/login' className='button is-light'>
                    Log in
                  </Link>
                </div>
              )}
              {isAuthenticated && (
                <Link to='/' onClick={handleLogOut} className='button is-light'>
                  Log out
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
});

export default withRouter(connect(mapStateToProps)(Navbar));
