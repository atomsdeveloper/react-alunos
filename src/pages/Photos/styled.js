import styled from 'styled-components';

// Config Colors
import * as Colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  margin-top: 1rem;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const LabelContainer = styled.div`
  label {
    width: 180px;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #eee;
    border: 5px dashed ${Colors.primaryColor};
    cursor: pointer;
    border-radius: 50%;
    overflow: hidden;
  }

  img {
    width: 180px;
    height: 180px;
  }

  input {
    display: none;
    height: 40px;
    font-size: 18px;
    border: 1px solid #ddd;
    padding: 0 10px;
    border-radius: 4px;
    margin-top: 5px;

    &:focus {
      border: 1px solid ${Colors.primaryColor};
    }
  }
`;
