import React from "react";
import moment from "moment";

import { TransactionItemWrapper } from "./styled";

const TransactionItem = ({ data }) => {
  const date = moment(data.dateTime).fromNow();
  console.log(data.dateTime);
  console.log(new Date());
  return (
    <TransactionItemWrapper>
      <span>{date}</span>
      <span>{data.description}</span>
      <span>$ {data.amount}></span>
    </TransactionItemWrapper>
  );
};

export default TransactionItem;
