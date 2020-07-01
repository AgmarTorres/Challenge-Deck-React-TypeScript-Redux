import React from 'react'
import { useSelector} from 'react-redux'
import {Container, Main, Header, Rotate, Row, Data } from './styles'
import { ICart } from '../../store/deck/types'
import Cart  from '../../components/Cart'

interface ApplicationState{
  loading: boolean;
  carts: ICart[]
  rotation: string
}

const Deck: React.FC = () =>{
  const carts = useSelector( (state:ApplicationState) => state.carts )
  const rotation = useSelector( (state:ApplicationState) => state.rotation )
  const naipes =['H', 'D', 'C', 'S']
  const values = ['2', 'A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3']
  let newValues: Array<String> = []
  let list: Array<String> = []
  let newNaipes: Array<String>=[]
  if(carts.length){
    const indexValue = values.findIndex(value => value[0] === rotation[0])
    values.forEach( (cart, index) =>{
      if(indexValue <= index){
        newValues.push(String(cart))
      }
    })

    values.forEach( (cart, index) =>{
      if(indexValue > index){
        newValues.push(String(cart))
      }
    })
    let indexNaipe = 0
    rotation.length === 3 ?
      indexNaipe = naipes.findIndex(naipe=> naipe ===rotation[2])
      :
      indexNaipe = naipes.findIndex(naipe=> naipe ===rotation[1])


    naipes.forEach( (cart, index) =>{
      if(indexNaipe <= index){
        newNaipes.push(String(cart))
      }
    })

    naipes.forEach( (cart, index) =>{
        if(indexNaipe > index){
            newNaipes.push(String(cart))
        }
      })
  }

  newNaipes.forEach(naipes =>{
    newValues.forEach(value =>{
      let obj = String(value) + naipes
      carts.forEach( cart => {
        if(cart.code === obj){
          list.push(obj)
        }
      })
    })
  })

  return(
   <Container>
    <Header>Deck</Header>
    <Main>
      <Row>
      {
        carts.map( (cart, index) =>{
         if( index > 4 ){ return ''}
         else{
            if(cart.code.length === 3){
              return(
                <Cart key={ index } number={cart.code[0]+cart.code[1]} naipe={ cart.code[2] } />
               )
            }
            else{
                return(
                  <Cart key={ index } number={cart.code[0]} naipe={cart.code[1]} />
                )
              }
            }
          }
        )
      }
      </Row>
      <Row>
      {
        carts.map( (cart, index) =>{
         if(index >= 5 ){
            if(cart.code.length === 3){
              return(
                <Cart key={ index } number={cart.code[0]+cart.code[1]} naipe={ cart.code[2] } />
              )
            }else{
              return(
                <Cart key={ index } number={cart.code[0]} naipe={cart.code[1]} />
              )
            }
            }
          return ''
          }
        )
      }
      </Row>
      <Rotate>
        <h1>Carta de Rotação</h1>
        {
          rotation.length > 0 ?
            rotation.length ===3 ?
            <Cart number={rotation[0]+rotation[1]} naipe={rotation[2]} ></Cart>
            :
            <Cart number={rotation[0]} naipe={rotation[1]} ></Cart>
          : ''
        }
        </Rotate>
      <Data>
        <span>Maior Cart: {list[0]}. </span><br/>
        <span>Lista ordenada:
          {
            list.map( (value,index) =>
              index === list.length -1 ?
              <span key={index}> { value }. </span> :
              <span key={ index}> { value }, </span>
            )
          }
        </span>
      </Data>
    </Main>
  </Container>
 )
}

export default Deck
