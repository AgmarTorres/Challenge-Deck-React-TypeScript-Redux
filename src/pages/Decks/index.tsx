import React, { useState } from 'react'

import {Container, Main, Header, Rotate, Input,  Row, Data, Button } from './styles'
import Cart  from '../../components/Cart'


interface ICart {
  num: string
  nap: string
}

const Deck: React.FC = () =>{
  const [ data, setData] = useState<ICart[]>([])
  return(
   <Container>
    <Header>Deck</Header>
    <Main>
      <Row>
        <Cart></Cart>
        <Cart></Cart>
        <Cart></Cart>
        <Cart></Cart>
        <Cart></Cart>
      </Row>
      <Row>
        <Cart></Cart>
        <Cart></Cart>
        <Cart></Cart>
        <Cart></Cart>
        <Cart></Cart>
      </Row>
      <Rotate>
        <h1>Carta de Rotação</h1>
        <Cart></Cart>
      </Rotate>
      <Data>
        <Input placeholder='Digite a carta'></Input>
        <Button> Adicionar </Button>
      </Data>
    </Main>
  </Container>
 )
}

export default Deck
