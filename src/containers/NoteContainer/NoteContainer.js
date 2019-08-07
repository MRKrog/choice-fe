import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';

import NoteTab from '../../components/NoteTab/NoteTab';

export class NoteContainer extends Component {

  render() {
    return (
      <div className='NoteContainer'>
        <section className="NoteTab-Container">
          <NoteTab />
          <NoteTab />
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

NoteContainer.propTypes = {
  loading: PropTypes.bool,
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteContainer);
