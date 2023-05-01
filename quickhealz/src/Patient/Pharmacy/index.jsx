import React from 'react';
import ContentHeader from './ContentHeader';
import {Button, Card} from 'antd';
import {PlusSquareOutlined} from '@ant-design/icons';
// import {useSelector} from 'react-redux';
import NewOrder from './NewOrder';
import ViewOrder from './ViewOrder';
import "./style.css"

const Pharmacy = () => {
  const [newMode, setNewMode] = React.useState(false);
  const [order, setOrder] = React.useState(undefined);
//   const orders = useSelector((state) => state.me.data.orders) || [];
  const orders =  [
    {
      "id": 1,
      "items": [
        {
          "id": 1,
          "name": "Saridon",
          "eachPrice": 10,
          "quantity": 2,
          "totalPrice": 20
        },
        {
          "id": 2,
          "name": "Vicks",
          "eachPrice": 10,
          "quantity": 1,
          "totalPrice": 10
        }
      ],
      "totalPrice": 30
    },
    {
      "id": 2,
      "items": [
        {
          "id": 1,
          "name": "Saridon",
          "eachPrice": 10,
          "quantity": 2,
          "totalPrice": 20
        }
      ],
      "totalPrice": 20
    },
    {
      "id": 3,
      "items": [
        {
          "id": 1,
          "name": "Saridon",
          "eachPrice": 10,
          "quantity": 2,
          "totalPrice": 20
        }
      ],
      "totalPrice": 20
    },
    {
      "id": 4,
      "items": [
        {
          "id": 1,
          "name": "Saridon",
          "eachPrice": 10,
          "quantity": 0,
          "totalPrice": 0
        },
        {
          "id": 2,
          "name": "Vicks",
          "eachPrice": 10,
          "quantity": 3,
          "totalPrice": 30
        }
      ],
      "totalPrice": 30
    },
    {
      "id": 5,
      "items": [
        {
          "id": 3,
          "name": "Dettol",
          "eachPrice": 20,
          "quantity": 6,
          "totalPrice": 120
        }
      ],
      "totalPrice": 120
    },
    {
      "id": 6,
      "items": [
        {
          "id": 2,
          "name": "Vicks",
          "eachPrice": 10,
          "quantity": 2,
          "totalPrice": 20
        }
      ],
      "totalPrice": 20
    }
  ]
  console.log(orders);

  const [sortAsc, setSortAsc] = React.useState(true);

  const toggleSortOrder = React.useCallback(() => {
    setSortAsc(!sortAsc);
  }, [sortAsc]);
  
  const sortButton = React.useMemo(() => (
    <Button
      onClick={toggleSortOrder}
    >
      {sortAsc ? 'Sort Descending' : 'Sort Ascending'}
    </Button>
  ), [sortAsc, toggleSortOrder]);

  const addOrderButton = React.useMemo(() => (
    <Button
      icon={<PlusSquareOutlined />}
      onClick={() => {setNewMode(true)}}
      type='primary'
    >
      New Order
    </Button>
  ));

  const renderOrders = React.useCallback((sortAsc) => {
    const sortedOrders = sortAsc
      ? [...orders].sort((a, b) => a.id - b.id)
      : [...orders].sort((a, b) => b.id - a.id);
  
    return sortedOrders.map((order) => (
      <div className="card-wrapper">
        <Card key={order.id}>
          <p>Order #{order.id}</p>
          <div className='sub-card-wrapper'>
            <Button
              type="primary"
              onClick={() => {setOrder(order)}}
            >
              View Details
            </Button>
          </div>
        </Card>
      </div>
    ));
  }, [orders]);
  

  if (newMode) {
    return (<NewOrder exisistingOrders={orders} changeNewMode={(value) => setNewMode(value)} />);
  }

  if (order) {
    return (<ViewOrder order={order} changeOrder={(value) => setOrder(value)} />);
  }

  return (
    <div>
      <ContentHeader
        title="Pharmacy"
        buttons={[addOrderButton, sortButton]}
      >
      </ContentHeader>
      <div className='content-body'>
        {sortAsc ? (
          renderOrders(true)
        ) : (
          renderOrders(false)
        )}
      </div>
    </div>
  );
   
  
  
}

export default Pharmacy;
