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
  grid-template-columns: 4rem auto 3rem;
  box-shadow: 1px 2px 2px 0px rgba(235, 235, 235, 1);
`;

export {
  ListingContainer,
  TitleText,
  CardContainer,
  TransactionsWrapper,
  TransactionItemWrapper,
  TabsContainer,
  Tab
};
