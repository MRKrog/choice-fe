import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import { Link } from 'react-router-dom';

import OrderTab from '../OrderTab/OrderTab';

export class SideBar extends Component {

  componentDidMount() {
    const { setCurrOrder, orders } = this.props;
    if(this.props.currentOrder.length){
      console.log('current order exists');
    } else {
      setCurrOrder(orders[0].order_number)
      console.log('current order does note exists');
    }
  }

  render() {
    const { currentOrder, orders } = this.props;

    return (
      <div className='SideBar'>
        <section className="OrderTab-Container">
        {
          typeof this.props.currentOrder == 'number' &&
          orders.map(info => {
            return (
              <OrderTab key={info.id} {...info}/>
            )
          })
        }
        </section>
        <button className="newBtn">
          <i className="fas fa-plus"></i> New Order
        </button>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  loading: state.loading,
  orders: state.orders,
  currentOrder: state.currentOrder
});

export const mapDispatchToProps = dispatch => ({
  setLoading: data => dispatch(actions.setLoading(data)),
  setCurrOrder: data => dispatch(actions.setCurrOrder(data)),
});

SideBar.propTypes = {
  loading: PropTypes.bool,
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
