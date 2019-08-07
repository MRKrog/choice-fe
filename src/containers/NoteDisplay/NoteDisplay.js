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
    console.log('item saved')
  }

  render() {

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
                      rows="20"
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
        <section className="NoteSave">
          <button className="save-button" onClick={(e) => this.handleNoteSave(e)}>
            <i className="fas fa-save"></i>
          </button>
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

NoteDisplay.propTypes = {
  loading: PropTypes.bool,
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteDisplay);
