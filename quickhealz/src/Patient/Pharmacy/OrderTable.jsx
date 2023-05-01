import React from 'react';
import {Table, Tag} from 'antd'

const OrderTable = ({order}) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Each Price',
      dataIndex: 'eachPrice',
      key: 'eachPrice',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Total Price',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
    }
  ];

  const footer = () => (
    <div>
      <h4>Total Price : {order.totalPrice}</h4>
    </div>
  )

  return (
    <Table dataSource={order.items} columns={columns} footer={footer} />
  )
}

export default OrderTable;
