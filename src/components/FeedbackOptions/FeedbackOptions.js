import { Container } from './FeedbackOptions.styled';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onClick }) => {
  return (
    <Container>
      <Button type="button" onClick={() => onClick('good')}>
        Good
      </Button>
      <Button type="button" onClick={() => onClick('neutral')}>
        Neutral
      </Button>
      <Button type="button" onClick={() => onClick('bad')}>
        Bad
      </Button>
    </Container>
  );
};
