import styled from "styled-components";

const ListingContainer = styled.div`
  font-size: 18px;
  width: 100%;
  color: #263550;
  font-weight: 400;
  line-height: 24px;
`;

const TitleText = styled.div`
  text-align: center;
  margin: 2rem 0 1rem;
  border-bottom: 1px solid #ebebeb;
`;

const CardContainer = styled.div`
  margin: 0 1rem;
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  & div:first-of-type {
    font-weight: bold;
  }
`;

const Tab = styled.div`
  display: inline-block;
  text-transform: capitalize;
  margin: 0 1.5rem;
`;

const TransactionsWrapper = styled.div`
  margin-top: 1rem;
`;

const TransactionItemWrapper = styled.div`
  margin: 1rem 1rem 0;
  display: grid;
  grid-template-columns: 4rem auto 5rem;
  align-items: center;
  box-shadow: 1px 2px 2px 0px rgba(235, 235, 235, 1);
`;

const DateTime = styled.p`
  font-size: 14px;
  margin: 1rem 1rem 0;
`;

const Status = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  font-size: 12px;
`;

const Amount = styled.div`
  font-size: 16px;
  text-align: right;
  margin-right: 0.5rem;
`;

const Decimals = styled.span`
  font-size: 12px;
`;

const Description = styled.div`
  p {
    margin: 0;
    font-size: 10px;
  }
`;

export {
  ListingContainer,
  TitleText,
  CardContainer,
  TransactionsWrapper,
  TransactionItemWrapper,
  TabsContainer,
  Tab,
  DateTime,
  Status,
  Amount,
  Decimals,
  Description
};
