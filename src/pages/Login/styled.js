import styled from 'styled-components';

// Config Colors
import * as colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  margin-top: 1rem;
`;

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 2rem;

  input {
    height: 40px;
    font-size: 18px;
    border: 1px solid #ddd;
    padding: 0 10px;
    border-radius: 4px;
    margin-top: 5px;

    &:focus {
      border: 1px solid ${colors.primaryColor};
    }
  }
`;
