import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import LogIn from './components/auth/LogIn';
import Register from './components/auth/Register';
import ForgotPassword from './components/auth/ForgotPassword';
import ForgotPasswordVerification from './components/auth/ForgotPasswordVerification';
import ChangePassword from './components/auth/ChangePassword';
import ChangePasswordConfirm from './components/auth/ChangePasswordConfirm';
import Welcome from './components/auth/Welcome';
import Redirect from './components/Redirect';
import Footer from './components/Footer';
import { Auth } from 'aws-amplify';
import { connect } from 'react-redux';
import {
  setUser,
  setAuthenticated,
  setAuthenticating
} from './redux/auth/auth.actions';

class App extends Component {
  async componentDidMount() {
    try {
      await Auth.currentSession();
      this.props.dispatch(setAuthenticated(true));
      const user = await Auth.currentAuthenticatedUser();
      this.props.dispatch(setUser(user));
    } catch (error) {
      if (error !== 'No current user') {
        console.log(error);
      }
    }
    this.props.dispatch(setAuthenticating(false));
  }

  render() {
    return (
      <div className='App'>
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route exact path='/' render={props => <Home {...props} />} />
              <Route
                exact
                path='/dashboard'
                render={props => <Dashboard {...props} />}
              />
              <Route
                exact
                path='/login'
                render={props => <LogIn {...props} />}
              />
              <Route
                exact
                path='/register'
                render={props => <Register {...props} />}
              />
              <Route
                exact
                path='/forgotpassword'
                render={props => <ForgotPassword {...props} />}
              />
              <Route
                exact
                path='/forgotpasswordverification'
                render={props => <ForgotPasswordVerification {...props} />}
              />
              <Route
                exact
                path='/changepassword'
                render={props => <ChangePassword {...props} />}
              />
              <Route
                exact
                path='/changepasswordconfirmation'
                render={props => <ChangePasswordConfirm {...props} />}
              />
              <Route
                exact
                path='/welcome'
                render={props => <Welcome {...props} />}
              />
              <Route exact path='*' render={props => <Redirect {...props} />} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticating: state.auth.isAuthenticating
});

export default connect(mapStateToProps)(App);
