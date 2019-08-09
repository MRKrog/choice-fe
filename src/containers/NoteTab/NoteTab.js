import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';

export class NoteTab extends Component {

  handleCurrentStatus = (status) => {
    parseInt(status)
    switch(status){
      case 0:
        return "#008000";
      case 1:
       return "#ffff00";
      case 2:
        return "#ff0000"
      default:
        return "#008000";
    }
  }

  render() {
    const { title, copy, id, setCurrNote, currentNote, status } = this.props;

    let noteTabStyle;
    if(id === currentNote) {
      noteTabStyle = "NoteTab status-true";
    } else {
      noteTabStyle = "NoteTab status-false";
    }

    let currentStatus = this.handleCurrentStatus(status)

    return (
      <div className={noteTabStyle} onClick={() => setCurrNote(id)}>
        <section className="noteStatus">
          <span className="currentStatus" style={{ backgroundColor: currentStatus }}></span>
        </section>
        <section className="notePreview">
          <h5>{title}</h5>
          <p>{copy}</p>
        </section>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  loading: state.loading,
  currentNote: state.currentNote,
  currentOrder: state.currentOrder
});

export const mapDispatchToProps = dispatch => ({
  setLoading: data => dispatch(actions.setLoading(data)),
  setCurrNote: data => dispatch(actions.setCurrNote(data)),
});

NoteTab.propTypes = {
  loading: PropTypes.bool,
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteTab);
