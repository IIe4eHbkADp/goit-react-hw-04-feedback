import PropTypes from 'prop-types';
import { SectionWrapp, Title } from './Section.styled';

export function Section({ title, children }) {
  return (
    <SectionWrapp>
      <Title>{title}</Title>
      {children}
    </SectionWrapp>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
