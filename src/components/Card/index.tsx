import React from 'react'
import {Container, NaipeS, NaipeE, Value } from './styles'

interface ICard{
  number: string
  naipe: string
}

const Card: React.FC<ICard> = ({number, naipe}) =>{
    var color = false
    if(naipe === 'H' || naipe === 'D'){
      color = true
    }
    return (
      <Container isColor={color}>
        <NaipeS >
          {number}
          { naipe === 'S' ? <span>&spades;</span>:
            naipe === 'H' ? <span>&hearts;</span> :
            naipe === 'D' ? <span>&diams;</span> :
            <span>&clubs;</span>
          }
        </NaipeS>
        <Value>
          {number}
          { naipe === 'S' ? <span>&spades;</span>:
            naipe === 'H' ? <span>&hearts;</span> :
            naipe === 'D' ? <span>&diams;</span> :
            <span>&clubs;</span>
          }
        </Value>
        <NaipeE>
          {number}
          { naipe === 'S' ? <span>&spades;</span>:
            naipe === 'H' ? <span>&hearts;</span> :
            naipe === 'D' ? <span>&diams;</span> :
            <span>&clubs;</span>
          }
        </NaipeE>
      </Container>
    )
}

export default Card
