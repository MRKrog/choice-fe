import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import NoteContainer from '../NoteContainer/NoteContainer';
import NoteDisplay from '../NoteDisplay/NoteDisplay';

import PropTypes from 'prop-types';
import { Route, Switch } from "react-router-dom";
import * as actions from '../../actions';

export class App extends Component {

  componentDidMount() {
    this.props.setLoading(true);
    this.props.setLoading(false);
  }

  render() {
    return (
      <div className='App'>
      <Header />
        <section className="Content-Container">
          <SideBar />
          <NoteContainer />
          <NoteDisplay />
        </section>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  loading: state.loading,
});

export const mapDispatchToProps = dispatch => ({
  setLoading: data => dispatch(actions.setLoading(data)),
});

App.propTypes = {
  loading: PropTypes.bool,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
