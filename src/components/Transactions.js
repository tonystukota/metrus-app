import React from "react";

import Tabs from "./Tabs";
import TransactionItem from "./TransactionItem";
import { TransactionsWrapper } from "./styled";

const tabs = ["last", "details", "transfer"];

const Transactions = ({ data }) => (
  <TransactionsWrapper>
    <Tabs tabs={tabs} />
    {data.map(i => (
      <TransactionItem data={i} />
    ))}
  </TransactionsWrapper>
);

export default Transactions;
