import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import { Link } from 'react-router-dom';

import OrderTab from '../../components/OrderTab/OrderTab';

export class SideBar extends Component {

  componentDidMount() {

  }

  render() {
    const { orders } = this.props;

    return (
      <div className='SideBar'>
        <section className="OrderTab-Container">
        {
          orders.length &&
          orders.map(info => {
            return (
              <Link to={`/order/${info.order_number}`} key={info.id} className='order-click'>
                <OrderTab key={info.id} {...info}/>
              </Link>
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
});

export const mapDispatchToProps = dispatch => ({
  setLoading: data => dispatch(actions.setLoading(data)),
});

SideBar.propTypes = {
  loading: PropTypes.bool,
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
