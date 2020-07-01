import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Container, Main, Header, Rotate, Input,  Row, Data, Button } from './styles'
import { ICart } from '../../store/deck/types'
import Cart  from '../../components/Cart'

interface ApplicationState{
  loading: boolean;
  carts: ICart[]
}

const Deck: React.FC = () =>{
  const carts = useSelector( (state:ApplicationState) => state )
  const [ data, setData] = useState<ICart[]>([])
  return(
   <Container>
    <Header>Deck</Header>
    <Main>
      <Row>
      {
        carts.carts.map( (cart, index) =>{
         if(index == 0 || index > 5 ){}
         else{
            return(
              <Cart key={ index } number={cart.code[0]} naipe={cart.code[0]} />
             )
            }
          }
        )
      }
      </Row>
      <Row>
      {
        carts.carts.map( (cart, index) =>{
         if(index >= 6 ){
            return(
              <Cart key={index} number={cart.code[0]} naipe={cart.code[0]} />
             )
            }
          }
        )
      }
      </Row>
      <Rotate>
        <h1>Carta de Rotação</h1>
        <Cart number={carts.carts[0].code[0]} naipe={carts.carts[0].code[1]} ></Cart>
      </Rotate>
      <Data>
        <span>Maior Cart: </span><br/>
        <span>Maior Cart:</span>
      </Data>
    </Main>
  </Container>
 )
}

export default Deck
