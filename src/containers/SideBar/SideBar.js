import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';

import OrderTab from '../OrderTab/OrderTab';

export class SideBar extends Component {

  componentDidMount() {
    const { setCurrOrder, orders, currentOrder } = this.props;
    if(!currentOrder.length){
      setCurrOrder(orders[0].id)
    }
  }

  render() {
    const { currentOrder, orders } = this.props;

    return (
      <div className='SideBar'>
        <section className="OrderTab-Container">
        {
          typeof currentOrder === 'number' &&
          orders.map(info => {
            return (
              <OrderTab key={info.number} {...info}/>
            )
          })
        }
        </section>
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
