import React from 'react';
import {Button, Card, Space,Input} from 'antd';
import ContentHeader from './ContentHeader';
import {CloseOutlined, ShoppingCartOutlined, PlusOutlined, MinusOutlined, SearchOutlined} from '@ant-design/icons';
// import {useSelector, useDispatch} from 'react-redux';

import OrderTable from './OrderTable';
// import {updateMe} from '../../../redux/actions/me';

const NewOrder = ({exisistingOrders, changeNewMode}) => {

  const [isOnSummary, setIsOnSummary] = React.useState(false);
  const [cartItems, setCartItems] = React.useState(new Map());
  const [newOrder, setNewOrder] = React.useState(undefined);
  // const pharmacyItems = useSelector((state) => state.pharmacyItems.data) || [];
 const pharmacyItems = [
    {
      "id": 1,
      "name": "Saridon",
      "eachPrice": 10
    },
    {
      "id": 2,
      "name": "Vicks",
      "eachPrice": 10
    },
    {
      "id": 3,
      "name": "Dettol",
      "eachPrice": 20
    }
  ];

  const [filteredItems, setFilteredItems] = React.useState(pharmacyItems);
  // const dispatch = useDispatch();

  const handleViewCart = () => {
    const items = Array.from(cartItems.values());
    const id = exisistingOrders.length + 1;
    const totalPrice = items.reduce((res,item)=>{
      return item.totalPrice + res;
    }, 0);

    setNewOrder({id, items, totalPrice});
    setIsOnSummary(true);
  }

  const handlePlaceOrder = () => {
    exisistingOrders.push(newOrder);
    const data = {orders: exisistingOrders};
    // dispatch(updateMe(data));
    changeNewMode(false);
    }

      const placeOrderButton = React.useMemo(() => (
    <Button
      onClick={() => {handlePlaceOrder()}}
      type='primary'
    >
      Place Order
    </Button>
  ));

  const cartButton = React.useMemo(() => (
    <Button
    type='primary'
      icon={<ShoppingCartOutlined />}
      disabled={cartItems.size === 0}
      onClick={() => {handleViewCart()}}
    >
      View Cart
    </Button>
  ), [cartItems, handleViewCart])

  const addMoreItemsButton = () => (
    <Button
    type='primary'
      icon={<PlusOutlined />}
      onClick={() => {setIsOnSummary(false)}}
    >
      Add More Items
    </Button>
  );

  const cancelButton = (
    <Button
      type="default"
      danger
      icon={<CloseOutlined />}
      onClick={() => changeNewMode(false)}
    >
      Cancel
    </Button>
  )

  const getCount = (id) => {
    if(cartItems.get(id)) {
      return cartItems.get(id).quantity;
    }
    return 0;
  }

  const setCount = (id, item, add=false) => {
    const newCart = new Map(cartItems);
    if (newCart.get(id)) {
      const existing = newCart.get(id);
      const newItem = {
        ...existing,
        quantity: add ? existing.quantity + 1 : existing.quantity - 1,
      };
      newItem.totalPrice = newItem.quantity * newItem.eachPrice;

      newCart.set(id, newItem);
    } else {
      newCart.set(id, {
        ...item,
        quantity: 1,
        totalPrice: item.eachPrice,
      });
    }
    setCartItems(newCart);
  }

  const renderPharmacyItems = React.useCallback((filteredItems) =>{
    return filteredItems.map((item) => (
      <div className="card-wrapper">
        <Card key={item.id}>
          <div className="new-order-card-content">
            <div className="card-content-desc">
              <p>{item.name}</p>
              <p>{item.eachPrice}</p>
            </div>
            <div className="new-order-card-content-buttons">
              <Space>
              <Button
                icon={<PlusOutlined />}
                onClick={() => {setCount(item.id, item, true)}}
                size="small"
                type='primary'
              >
              </Button>
              {getCount(item.id)}
              <Button
                icon={<MinusOutlined />}
                onClick={() => {setCount(item.id, item)}}
                size="small"
                type='primary'
                disabled={!getCount(item.id)}
              >
              </Button>
              </Space>
            </div>
          </div>
        </Card>
      </div>
    ))
  }, [filteredItems, cartItems])

  const onSearch = (value) => {
    const newFiltered = pharmacyItems.filter((item) => Array.isArray(item.name.toLowerCase().match(value.toLowerCase())));
    if (newFiltered.length > 0) {
      setFilteredItems(newFiltered);
    }
  };


  const renderContent = React.useMemo(() => {
    if(isOnSummary) {
      return (
        <div>
          <OrderTable order={newOrder} />
        </div>
      )
    }

    return (
      <div>
       {renderPharmacyItems(filteredItems)}
      </div>
    )
  }, [isOnSummary, pharmacyItems, filteredItems, cartItems, newOrder]);

  return(
    <>
    <ContentHeader
      title="New Order"
        buttons={isOnSummary ? [placeOrderButton, addMoreItemsButton, cancelButton] : [cartButton, cancelButton]}
    >
    </ContentHeader>
    <div className="content-body">
        <Input
          placeholder="input search text"
          prefix={<SearchOutlined />}
          onChange={(e) => onSearch(e.target.value)}
        />
      {renderContent}
    </div>
    </>

  )
};

export default NewOrder;