import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';

import { fetchData } from '../../utility/fetchData';
import { fetchOptions } from '../../utility/fetchOptions';
import { fetchDelete } from '../../thunks/fetchDelete';

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
    const { updateNote } = this.props;
    const options = await fetchOptions('PUT', this.state);
    await fetchData(process.env.REACT_APP_BACKEND_URL + `/api/v1/notes/${id}`, options);
    updateNote(id, this.state)
  }

  handleNoteDelete = async id => {
    const { fetchDelete, currentOrder, notes, deleteNote, setCurrNote, setResetNotesTab } = this.props;
    deleteNote(id)
    let resetNote = notes.find(note => {
      return note.order_id === currentOrder && note.id !== id
    })
    if(resetNote === undefined){
      setResetNotesTab(null)
    } else {
      setCurrNote(resetNote.id)
    }
    await fetchDelete(id);
  }

  handlePriority = (priority) => {
    const { id, updateStatus } = this.props;
    this.setState({
      status: priority
    })
    updateStatus(id, priority)
  }

  render() {
    const { id, orders, currentOrder } = this.props;
    let orderNumber = orders.find(order => order.id === currentOrder)

    return (
      <div className='NoteDisplay'>
        <section className="NoteInput-Container">
          <h5 className="Order-Number">Order #{orderNumber.number}</h5>
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
              <li className="low"><button onClick={() => this.handlePriority(0)}></button></li>
              <li className="medium"><button onClick={() => this.handlePriority(1)}></button></li>
              <li className="high"><button onClick={() => this.handlePriority(2)}></button></li>
            </ul>
          </div>
          <div className="Note-Updates">
            <section className="Note-Save">
              <button className="save-button" onClick={() => this.handleNoteSave()}>
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
  notes: state.notes,
  orders: state.orders,
});

export const mapDispatchToProps = dispatch => ({
  setLoading: data => dispatch(actions.setLoading(data)),
  deleteNote: data => dispatch(actions.deleteNote(data)),
  setCurrNote: data => dispatch(actions.setCurrNote(data)),
  fetchDelete: data => dispatch(fetchDelete(data)),
  updateNote: (id, info) => dispatch(actions.updateNote(id, info)),
  updateStatus: (id, status) => dispatch(actions.updateStatus(id, status)),
  setResetNotesTab: data => dispatch(actions.setResetNotesTab(data)),
});

NoteDisplay.propTypes = {
  loading: PropTypes.bool,
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteDisplay);
