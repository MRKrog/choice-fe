import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';

import OrderTab from '../../components/OrderTab/OrderTab';

export class SideBar extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div className='SideBar'>
        <section className="OrderTab-Container">
          <OrderTab />
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

SideBar.propTypes = {
  loading: PropTypes.bool,
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
