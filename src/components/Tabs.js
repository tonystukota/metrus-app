import React from "react";

import { TabsContainer, Tab } from "./styled";

const Transactions = ({ tabs }) => (
  <TabsContainer>
    {tabs.map(tab => (
      <Tab key={tab}>{tab}</Tab>
    ))}
  </TabsContainer>
);

export default Transactions;
