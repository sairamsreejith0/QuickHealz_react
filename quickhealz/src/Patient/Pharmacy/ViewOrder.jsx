import React from 'react';
import {Button} from 'antd';
import ContentHeader from './ContentHeader';
import {CloseOutlined} from '@ant-design/icons';
import OrderTable from './OrderTable';

const ViewOrder = ({order, changeOrder}) => {


  const closeButton = (
    <Button
      type="default"
      danger
      icon={<CloseOutlined />}
      onClick={() => changeOrder(undefined)}
    >
      Close
    </Button>
  )

  return (
    <div>
      <ContentHeader
        title={`Order#${order.id}`}
        buttons={[closeButton]}
      >
      </ContentHeader>
      <div className="content-body">
        <OrderTable order={order} />
      </div>
    </div>
  )
};

export default ViewOrder;
