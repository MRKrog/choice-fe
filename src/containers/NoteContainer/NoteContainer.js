import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';

import NoteTab from '../../components/NoteTab/NoteTab';

export class NoteContainer extends Component {

  componentDidMount() {
    const { setCurrNote, currentNote, currNoteTabs } = this.props;
    if(!currentNote.length){
      setCurrNote(currNoteTabs[0].id)
    }
  }


  render() {
    const { currNoteTabs } = this.props;

    return (
      <div className='NoteContainer'>
        <section className="NoteTab-Container">
          {
            currNoteTabs.map(note => {
              return (
                <NoteTab key={note.id} {...note} />
              )
            })
          }
        </section>
        <button className="newBtn">
          <i className="fas fa-plus"></i> New Note
        </button>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  loading: state.loading,
  currentNote: state.currentNote,
});

export const mapDispatchToProps = dispatch => ({
  setLoading: data => dispatch(actions.setLoading(data)),
  setCurrNote: data => dispatch(actions.setCurrNote(data)),
});

NoteContainer.propTypes = {
  loading: PropTypes.bool,
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteContainer);
