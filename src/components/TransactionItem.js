import React from "react";
import iconUp from "../assets/Icon from.svg";
import iconDown from "../assets/Icon to Copy 2.svg";

import {
  TransactionItemWrapper,
  Status,
  Amount,
  Decimals,
  Description
} from "./styled";

const formatAMPM = date => {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
};

const getAmount = num => {
  const amount = num > 0 ? `$ ${num}` : `- $ ${Math.abs(num).toFixed()}`;
  const decimals = num % 1;
  return decimals ? (
    <React.Fragment>
      {amount}
      <Decimals>
        .
        {Math.abs(decimals)
          .toFixed(2)
          .substring(2)}
      </Decimals>
    </React.Fragment>
  ) : (
    amount
  );
};

const TransactionItem = ({ data }) => (
  <TransactionItemWrapper>
    <Status>
      {data.amount > 0 ? (
        <img src={iconUp} alt="arrowUp" />
      ) : (
        <img src={iconDown} alt="arrowDown" />
      )}
      {formatAMPM(new Date(data.dateTime))}
    </Status>
    <Description>
      {data.description}
      <p>{data.from}</p>
    </Description>
    <Amount>{getAmount(data.amount)}</Amount>
  </TransactionItemWrapper>
);

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
