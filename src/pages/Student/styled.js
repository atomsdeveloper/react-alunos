import styled from 'styled-components';

// Config Colors
import * as Colors from '../../config/colors';

export const Form = styled.form`
  margin-top: 30px;
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
      border: 1px solid ${Colors.primaryColor};
    }
  }
`;

export const ProfilePicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 0 20px;
  margin-top: 30px;

  img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    position: absolute;
    bottom: 0;
    color: #fff;
    background-color: ${Colors.primaryColor};
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;

export const Title = styled.h1`
  text-align: center;
`;
