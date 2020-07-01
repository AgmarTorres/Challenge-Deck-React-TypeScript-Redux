import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  justify-items: center;
  justify-self: center;
  align-items: center;
  border-radius: 10px;
  border: 2px solid #232129;
  width: 105px;
  height: 35px;

  ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  input {
    width: 100px;
    height: 30px;
    border: 0;
    background: transparent;
    font-size: 20px;
    background: #f4ede8;
    border-radius: 10px;

    &::placeholder {
      color: #666360;
      opacity: 0.2;
    }
  }

`;
