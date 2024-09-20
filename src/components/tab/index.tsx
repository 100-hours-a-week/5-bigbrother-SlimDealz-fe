import React, { useState } from 'react';
import { Tabs, Tab } from '@mui/material';
import MallList from '../list/mallList';
import ChartView from '../chart';

type Props = {
  productName: string;
};

const TabsComponent = ({ productName }: Props) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div style={{ width: '100%', paddingBottom: '20px' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="최저가 비교" />
        <Tab label="상품 시세 차트" />
      </Tabs>
      {value === 0 && <MallList productName={productName} />}
      {value === 1 && <ChartView productName={productName} />}
    </div>
  );
};

export default TabsComponent;
