import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';

export class OrderTab extends Component {

  render() {
    const { order_number, currentOrder, setCurrOrder } = this.props;

    let orderStyle;
    if(order_number === currentOrder) {
      orderStyle = "OrderTab status-true";
    } else {
      orderStyle = "OrderTab status-false";
    }

    return (
      <div className={orderStyle} onClick={() => setCurrOrder(order_number)}>
        <h4>Order #{order_number}</h4>
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
