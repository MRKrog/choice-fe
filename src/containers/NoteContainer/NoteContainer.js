import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';

import NoteTab from '../../components/NoteTab/NoteTab';

export class NoteContainer extends Component {

  handleNoteTabClick = (e, id) => {
    e.preventDefault()

    console.log(id);
  }

  render() {
    const { currentNotes } = this.props;
    const { handleNoteTabClick } = this.props;

    return (
      <div className='NoteContainer'>
        <section className="NoteTab-Container">
          {
            currentNotes.map(note => {
              return (
                <NoteTab key={note.id} {...note} onClick={() => this.handleNoteTabClick(note.id)}/>
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
});

export const mapDispatchToProps = dispatch => ({
  setLoading: data => dispatch(actions.setLoading(data)),
});

NoteContainer.propTypes = {
  loading: PropTypes.bool,
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteContainer);
