import React from 'react';

const OrderTab = (props) => {
  const { id, order_number } = props;
  

  return (
    <div className='OrderTab'>
      <h4>Order #{order_number}</h4>
    </div>
  )
}

export default OrderTab;
