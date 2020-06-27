import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-auto-rows: 1fr auto;
  justify-content: center;
  justify-items: center;
  font-size: 50px;
`

export const Header = styled.div`
  margin-bottom: 30px;
  color: #fff;
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
  justify-content: center;
  align-items: center;
`

export const Dual = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  background: blue;
`
