import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  max-width: 350px;
  width: 100%;
  margin: 0 auto 10px;
  padding: 20px 0;
  background-color: grey;

  border-radius: 5px;
`;

export const Description = styled.div`
  max-width: 250px;
  width: 100%;

  margin: 0 auto;
  padding: 20px;
  background-color: white;
  border-radius: 5px 5px 0 0;
`;

export const Avatar = styled.img`
  display: block;
  margin: 0 auto 20px;
  width: 100px;
  border-radius: 50%;
  overflow: hidden;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
`;

export const Tag = styled.p`
  text-align: center;
  opacity: 50%;
`;

export const Location = styled.p`
  text-align: center;
  opacity: 50%;
`;

export const Stats = styled.ul`
  display: flex;
  max-width: 250px;
  width: 100%;
  list-style-type: none;
  margin-top: 0px;
  margin-left: auto;
  margin-right: auto;

  padding: 20px;
  background-color: #f4f4f4;

  text-align: center;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  max-width: 80px;
  width: 100%;
  border: 1px solid darkgray;
  gap: 5px;
  padding: 5px 0;
`;

export const Quantity = styled.span`
  font-weight: 500;
`;

export const Label = styled.span``;
