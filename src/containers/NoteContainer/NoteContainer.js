import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';

import { createNote } from '../../thunks/createNote';

import NoteTab from '../NoteTab/NoteTab';

export class NoteContainer extends Component {

  componentDidMount() {
    const { setCurrNote, currentNote, currNoteTabs } = this.props;
    if(currentNote === null || typeof currentNote === 'number'){
      setCurrNote(currNoteTabs[0].id)
    }
    console.log('in notecontainer mount');
  }

  render() {
    const { currNoteTabs, createNote, currentOrder, notes } = this.props;
    console.log(currNoteTabs, " currNoteTabs");
    return (
      <div className='NoteContainer'>
        <section className="NoteTab-Container">
          {
            currNoteTabs.length ? (
            currNoteTabs.map(note => {
              return (
                <NoteTab key={note.id} {...note} />
              )
            })
          ) : ( createNote(currentOrder, notes) )
          }
        </section>
        <button className="newBtn" onClick={() => createNote(currentOrder, notes)}>
          <i className="fas fa-plus"></i> New Note
        </button>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  loading: state.loading,
  notes: state.notes,
  currentNote: state.currentNote,
  currentOrder: state.currentOrder,
});

export const mapDispatchToProps = dispatch => ({
  setLoading: data => dispatch(actions.setLoading(data)),
  setCurrNote: data => dispatch(actions.setCurrNote(data)),
  createNote: (currentOrder, notes) => dispatch(createNote(currentOrder, notes)),
});

NoteContainer.propTypes = {
  loading: PropTypes.bool,
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteContainer);
