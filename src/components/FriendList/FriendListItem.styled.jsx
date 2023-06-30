import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: white;
  border: 0.5px solid grey;
  border-radius: 5px;
  padding-left: 10px;
  :not(:last-child) {
    margin-bottom: 10px;
  }
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Span = styled.span`
  width: 18px;
  height: 18px;
  background-color: ${props => (props.status ? 'green' : 'red')};
  border-radius: 50px;
`;

export const Avatar = styled.img`
  width: 80px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const Name = styled.p`
  font-size: 22px;
  font-weight: 600;
  color: black;
`;
