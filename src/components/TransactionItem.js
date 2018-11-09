import React from "react";

import { TransactionItemWrapper } from "./styled";

const TransactionItem = ({ data }) => (
  <TransactionItemWrapper>
    <span>{data.dateTime}</span>
    <span>{data.description}</span>
    <span>$ {data.amount}></span>
  </TransactionItemWrapper>
);

export default TransactionItem;
