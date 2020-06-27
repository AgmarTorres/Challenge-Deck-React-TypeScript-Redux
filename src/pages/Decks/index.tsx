import React, { useState } from 'react'

import {Container, Main, Header, Rotate, Dual,  Row } from './styles'
import Cart  from '../../components/Cart'

const Deck: React.FC = () =>{
  const [ data, setData] = useState([])
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
        <Cart></Cart>
      </Rotate>

      <Dual>
        <input placeholder='Digite a carta'></input>
      </Dual>

    </Main>
  </Container>
 )
}

export default Deck
