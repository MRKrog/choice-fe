import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';

export class NoteDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      copy: ''
    }
  }

  componentDidMount() {
    const { title, copy } = this.props;
    this.setState({
      title,
      copy
    })
  }

  handleTitleChange = (e) => {
    const { name, value } = e.target
    console.log(this.state);
    this.setState({
      [name]: value
    })
  }

  handleNoteSave = (e) => {
    console.log('note saved')
  }

  handleNoteDelete = (e) => {
    console.log('note deleted')
  }

  handlePriority = () => {
    console.log('changed priority')
  }

  render() {

    const { id } = this.props;

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
            <h6>Note Priority</h6>
            <ul>
              <li className="low"><button onClick={() => this.handlePriority(id)}></button></li>
              <li className="medium"><button onClick={() => this.handlePriority(id)}></button></li>
              <li className="high"><button onClick={() => this.handlePriority(id)}></button></li>
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
  currentOrder: state.currentOrder
});

export const mapDispatchToProps = dispatch => ({
  setLoading: data => dispatch(actions.setLoading(data)),
});

NoteDisplay.propTypes = {
  loading: PropTypes.bool,
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteDisplay);
