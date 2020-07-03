import styled, { css } from 'styled-components'

interface ContainerProps{
  isColor: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  color: #000;
  background: white;
  height: 300px;
  width: 200px;
  margin: 5px 20px;
  border-radius: 10%;
  position: relative;

  ${props => props.isColor && css`
    color: red;
  `}
`

export const NaipeS = styled.div`
  font-size: 30px;
  align-self: flex-start;
  margin-top: 11px;
  margin-left: 2px;
`
export const NaipeE = styled.div`
  font-size: 30px;
  align-self: flex-end;
  margin-bottom:10px;
  margin-right: 3px;
`

export const Value = styled.div`
  font-size: 60px;
  margin:auto;
`
