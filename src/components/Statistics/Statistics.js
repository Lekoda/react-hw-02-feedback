import { Container } from './Statistics.styled';
import { List } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <Container>
      <List>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad:{bad}</li>
        <li>Total: {total}</li>
        <li>positive feedback:{positive} %</li>
      </List>
    </Container>
  );
};
