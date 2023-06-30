import PropTypes from 'prop-types';

import {
  StatisticsContainer,
  Title,
  List,
  ListItem,
  FirstSpan,
  SecondSpan,
} from './Statistics.stuled';

export const Statistics = ({ stats }) => {
  return (
    <StatisticsContainer>
      <Title>Upload stats</Title>

      <List>
        {stats.map(({ id, label, percentage }) => {
          return (
            <ListItem key={id}>
              <FirstSpan>{label}</FirstSpan>
              <SecondSpan>{percentage}</SecondSpan>
            </ListItem>
          );
        })}
      </List>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
