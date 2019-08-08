import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';

export class OrderTab extends Component {

  render() {
    const { id, number, currentOrder, setCurrOrder } = this.props;

    let orderStyle;
    if(id === currentOrder) {
      orderStyle = "OrderTab status-true";
    } else {
      orderStyle = "OrderTab status-false";
    }

    return (
      <div className={orderStyle} onClick={() => setCurrOrder(id)}>
        <h4>Order #{number}</h4><i className="fas fa-caret-right"></i>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  loading: state.loading,
  currentOrder: state.currentOrder
});

export const mapDispatchToProps = dispatch => ({
  setLoading: data => dispatch(actions.setLoading(data)),
  setCurrOrder: data => dispatch(actions.setCurrOrder(data)),
});

OrderTab.propTypes = {
  loading: PropTypes.bool,
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderTab);
