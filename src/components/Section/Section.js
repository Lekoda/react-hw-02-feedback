import { SectionWrap } from './Section.styled';
import { Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionWrap>
      <Title>{title}</Title>
      {children}
    </SectionWrap>
  );
};
