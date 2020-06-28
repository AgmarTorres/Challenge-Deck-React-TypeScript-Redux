import React from 'react'
import {Container, NaipeS, NaipeE, Value } from './styles'


const Cart: React.FC = () =>{
    return (
      <Container >
        <NaipeS>2 &spades;</NaipeS>
        <Value>2C</Value>
        <NaipeE>2C</NaipeE>
      </Container>
    )
}

export default Cart
