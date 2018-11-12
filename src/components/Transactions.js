import React from "react";

import Tabs from "./Tabs";
import TransactionItem from "./TransactionItem";
import { TransactionsWrapper } from "./styled";

const tabs = ["last", "details", "transfer"];

const Transactions = ({ data }) => {
  const todaysTrans = [],
    yesterdaysTrans = [],
    oldTrans = [];

  const todayStart = new Date().setHours(0, 0, 0, 0);
  var yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStart = new Date(yesterday).setHours(0, 0, 0, 0);

  for (var i = 0, len = data.length, stop = false; i < len; i++) {
    if (stop) oldTrans.push(data[i]);
    else {
      const transDate = new Date(data.dateTime);
      if (transDate < yesterdayStart) {
        oldTrans.push(data[i]);
        stop = true;
      } else {
      }
    }
  }

  return (
    <TransactionsWrapper>
      <Tabs tabs={tabs} />
      {data.map(i => (
        <TransactionItem data={i} key={i.id} />
      ))}
    </TransactionsWrapper>
  );
};

export default Transactions;
