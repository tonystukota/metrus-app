import React from "react";
// import moment from "moment";

import { TransactionItemWrapper } from "./styled";

const TransactionItem = ({ data }) => {
  return (
    <TransactionItemWrapper>
      {/* <span>{date}</span> */}
      <span>{data.description}</span>
      <span>$ {data.amount}></span>
    </TransactionItemWrapper>
  );
};

export default TransactionItem;
// .toISOString()

// const transDate = new Date(data.dateTime);
// const todayStart = new Date().setHours(0, 0, 0, 0);
// const yesterday = new Date().setDate(new Date().getDate() - 1);
// const yesterdayStart = new Date(yesterday).setHours(0, 0, 0, 0);
// console.log(transDate < yesterdayStart);
// const date =
//   transDate < yesterdayStart
//     ? transDate.getDate() + " " + months[transDate.getMonth()]
//     : transDate > todayStart
//       ? "Today"
//       : "Yesterday";

// var months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December"
// ];
