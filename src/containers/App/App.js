import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import NoteContainer from '../NoteContainer/NoteContainer';
import NoteDisplay from '../NoteDisplay/NoteDisplay';

import PropTypes from 'prop-types';
import { Route, Switch } from "react-router-dom";
import * as actions from '../../actions';

import { mockOrders, mockNotes } from '../../mockData.js';

export class App extends Component {

  componentDidMount() {
    this.props.setLoading(true);
    this.props.setOrders(mockOrders)
    this.props.setNotes(mockNotes)
    this.props.setLoading(false);
  }

  render() {

    // <NoteContainer />
    return (
      <div className='App'>
      <Header />
        <section className="Content-Container">
          <SideBar />
          {
            this.props.notes.length &&
            <Route path="/order/:id" render={({match}) => {
              const { id } = match.params;
              const currentNotes = this.props.notes.filter(note => note.order_number == id);
              return <NoteContainer currentNotes={currentNotes}/>
            }} />
          }

          <NoteDisplay />
        </section>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  loading: state.loading,
  orders: state.orders,
  notes: state.notes,
});

export const mapDispatchToProps = dispatch => ({
  setLoading: data => dispatch(actions.setLoading(data)),
  setOrders: data => dispatch(actions.setOrders(data)),
  setNotes: data => dispatch(actions.setNotes(data)),
});

App.propTypes = {
  loading: PropTypes.bool,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
