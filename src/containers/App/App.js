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
    console.log('App Re-Rendered');

    const { currentOrder, currentNote } = this.props;
    const currNoteTabs =this.props.notes.filter(note => note.order_number == currentOrder);
    const clickedNote = this.props.notes.find(note => note.id == currentNote);

    return (
      <div className='App'>
      <Header />
        <section className="Content-Container">
          {
            this.props.orders.length &&
            <SideBar />
          }
          {
            typeof this.props.currentOrder == 'number' &&
            <NoteContainer currNoteTabs={currNoteTabs} key={currentOrder}/>
          }
          {
            typeof this.props.currentNote == 'number' &&
            <NoteDisplay {...clickedNote} key={clickedNote.id}/>
          }
        </section>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  loading: state.loading,
  orders: state.orders,
  notes: state.notes,
  currentOrder: state.currentOrder,
  currentNote: state.currentNote,
});

export const mapDispatchToProps = dispatch => ({
  setLoading: data => dispatch(actions.setLoading(data)),
  setOrders: data => dispatch(actions.setOrders(data)),
  setNotes: data => dispatch(actions.setNotes(data)),
  setCurrOrder: data => dispatch(actions.setCurrOrder(data)),
});

App.propTypes = {
  loading: PropTypes.bool,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
