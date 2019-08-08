import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';

import { fetchAllNotes } from '../../thunks/fetchAllNotes';
import { fetchData } from '../../utility/fetchData';
import { fetchOptions } from '../../utility/fetchOptions';

export class NoteDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      copy: '',
      status: '',
    }
  }

  componentDidMount() {
    const { title, copy, status } = this.props;
    this.setState({
      title,
      copy,
      status
    })
  }

  handleTitleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleNoteSave = async () => {
    const { updateNote, id, order_id } = this.props;
    let path = this.props.notSaved ? 'POST' : 'PUT';
    let sendObject = this.props.notSaved ? { ...this.state, order_id } : this.state
    let urlEnd = this.props.notSaved ? '/api/v1/notes/' : `/api/v1/notes/${id}`;
    const options = await fetchOptions(path, sendObject);
    await fetchData(process.env.REACT_APP_BACKEND_URL + `${urlEnd}`, options);
    updateNote(id, this.state)
  }

  handleAddNote = async id => {
    const { fetchAllNotes, updateNote } = this.props;
    const options = await fetchOptions('PUT', this.state);
    await fetchData(process.env.REACT_APP_BACKEND_URL + `/api/v1/notes/${id}`, options);
    updateNote(id, this.state)
  }

  handleNoteDelete = (e) => {
    console.log('note deleted')
  }

  handlePriority = (priority) => {
    const { id, updateStatus } = this.props;
    this.setState({
      status: priority
    })
    updateStatus(id, priority)
  }

  render() {
    const { id, status } = this.props;

    let lowStyle = 'low'
    let mediumStyle = 'medium'
    let highStyle = 'high'
    console.log(status);
    switch (status) {
      case 0:
        lowStyle = 'low active';
        break;
      case 1:
        mediumStyle = 'medium active';
        break;
      case 2:
        highStyle = 'high active';
        break;
      default:
    }
    return (
      <div className='NoteDisplay'>
        <section className="NoteInput-Container ">
          <div className="NoteTitle-Container">
            <label>Title</label>
            <input type="text"
                   className="note-title"
                   placeholder="Enter A Title..."
                   value={this.state.title}
                   name="title"
                   autoComplete="off"
                   onChange={this.handleTitleChange} />
          </div>
          <div className="NoteCopy-Container">
            <label>Information</label>
            <textarea type="text"
                      rows="15"
                      cols="20"
                      className="note-copy"
                      placeholder="Enter Some Copy..."
                      value={this.state.copy}
                      name="copy"
                      autoComplete="off"
                      onChange={this.handleTitleChange}>
              </textarea>
          </div>
        </section>
        <section className="Note-Actions">
          <div className="Note-Priority">
            <h6>Current Status</h6>
            <ul>
              <li className={lowStyle}><button onClick={() => this.handlePriority(0)}></button></li>
              <li className={mediumStyle}><button onClick={() => this.handlePriority(1)}></button></li>
              <li className={highStyle}><button onClick={() => this.handlePriority(2)}></button></li>
            </ul>
          </div>
          <div className="Note-Updates">
            <section className="Note-Save">
              <button className="save-button" onClick={() => this.handleNoteSave(id)}>
                <i className="fas fa-save"></i>
              </button>
            </section>
            <section className="Note-Delete">
              <button className="delete-button" onClick={() => this.handleNoteDelete(id)}>
                <i className="fas fa-trash"></i>
              </button>
            </section>
          </div>
        </section>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  loading: state.loading,
  currentNote: state.currentNote,
  currentOrder: state.currentOrder,
  notes: state.notes
});

export const mapDispatchToProps = dispatch => ({
  setLoading: data => dispatch(actions.setLoading(data)),
  fetchAllNotes: data => dispatch(fetchAllNotes(data)),
  updateNote: (id, info) => dispatch(actions.updateNote(id, info)),
  updateStatus: (id, status) => dispatch(actions.updateStatus(id, status)),
});

NoteDisplay.propTypes = {
  loading: PropTypes.bool,
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteDisplay);
