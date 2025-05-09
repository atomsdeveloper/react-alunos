// Prop Types
import PropTypes from 'prop-types';

// Styled Components
import { Container } from './styled';

export default function Loading({ isLoading }) {
  if (!isLoading) return;

  return (
    <Container>
      <div />
      <span>Carregando....</span>
    </Container>
  );
}
Loading.defaultProps = {
  isLoading: false,
};
Loading.PropTypes = {
  isLoading: PropTypes.bool,
};
