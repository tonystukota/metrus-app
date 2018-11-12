import React from "react";

import Tabs from "./Tabs";
import TransactionItem from "./TransactionItem";
import { TransactionsWrapper, DateTime } from "./styled";

const tabs = ["last", "details", "transfer"];
const todayStart = new Date().setHours(0, 0, 0, 0);
const yesterday = new Date().setDate(new Date().getDate() - 1);
const yesterdayStart = new Date(yesterday).setHours(0, 0, 0, 0);
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const Transactions = ({ data }) => (
  <TransactionsWrapper>
    <Tabs tabs={tabs} />

    {data.map((e, i) => {
      var prevDate = data[i - 1]
        ? new Date(data[i - 1].dateTime.split("T")[0])
        : new Date();
      var currentDate = new Date(e.dateTime.split("T")[0]);

      const transDate = new Date(e.dateTime);
      const date =
        transDate < yesterdayStart
          ? transDate.getDate() + " " + months[transDate.getMonth()]
          : transDate > todayStart
          ? "Today"
          : "Yesterday";

      if (prevDate > currentDate) {
        return (
          <React.Fragment key={e.id}>
            <DateTime>{date}</DateTime>
            <TransactionItem data={e} key={e.id} />
          </React.Fragment>
        );
      } else return <TransactionItem data={e} key={e.id} />;
    })}
  </TransactionsWrapper>
);

export default Transactions;
