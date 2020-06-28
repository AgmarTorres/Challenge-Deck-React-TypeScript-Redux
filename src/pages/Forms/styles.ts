import styled from 'styled-components'
import { shade } from 'polished';
export const Container = styled.div`
  display: grid;
  grid-auto-rows: 1fr auto;
  justify-content: center;
  justify-items: center;
  font-size: 50px;
`

export const Header = styled.div`
  margin: 15px 0px;
  color: #ff9000;
`

export const Main = styled.div`
  display: grid;
  grid-auto-rows: repeat(4, 1fr);
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const Rotate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ff9000;
  font-size: 15px;
`


export const Data = styled.div`
  margin-top: 10vh;
  display: flex;
  justify-content: center;
`

export const Button = styled.button`
  background: #ff9000;
  font-size: 2vh;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #ff9000;
  border-radius: 10vw;
  &:hover {
    background:  ${shade(0.2, '#ff7000')};
    border:  2px solid ${shade(0.2, '#ff7000')};
  }
`;

export const Input = styled.input.attrs(props => ({
  type: 'text',
  maxLength: '2',
}))`
  width: 100px;
  padding: 0.5em;
  margin: 0.5em;
  background: #f4ede8;
  border: none;
  border-radius: 3px;
`

export const Line = styled.div`
  border: 1px solid #ff9000;
`
