import styled from '@emotion/styled';
import changeColor from '../changeColor/changeColor';

export const StatisticsContainer = styled.div`
  max-width: 350px;
  max-height: 150px;
  width: 100%;
  margin: 0 auto 10px;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h1`
  font-size: 22px;
  font-weight: 700;
  text-transform: uppercase;
  color: grey;
  margin: 0;
  padding: 20px 0px;

  text-align: center;
`;

export const List = styled.ul`
  max-width: 350px;
  width: 100%;
  list-style: none;
  display: flex;
  padding: 0px;
  margin: 0px;
  text-align: center;
`;

export const ListItem = styled.li`
  max-width 70px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid darkgray;
  gap: 5px;
  background-color: ${changeColor};
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const FirstSpan = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: white;
  padding: 10px 0px;
`;

export const SecondSpan = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: white;
  padding-bottom: 10px;
`;
