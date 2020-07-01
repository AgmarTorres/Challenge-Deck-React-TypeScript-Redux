import React from 'react'
import { useSelector} from 'react-redux'
import {Container, Main, Header, Rotate, Row, Data, Li } from './styles'
import { ICart } from '../../store/deck/types'
import Cart  from '../../components/Cart'

interface ApplicationState{
  loading: boolean;
  carts: ICart[]
  rotation: string
}

interface IFullHouse{
  value: string
}

function handleTriple(list: ICart[]){
  var group:Array<String> = []
  if( list.length < 5){ return group}

  list.forEach( (value, index) => {
    for( let i = 1 ; i < list.length ; i++){
      for( let j = 2; j < list.length ; j++){
        if(value.code[0] === list[i].code[0] && value.code[0] === list[j].code[0] ){
          if(value.code !== list[i].code && value.code !== list[j].code && list[i].code !== list[j].code ){
            if( !group.includes(value.code+", " + list[i].code +", " + list[j].code) && !group.includes(list[i].code +", " + value.code +", " + list[j].code) && !group.includes(value.code+", " + list[j].code +", " + list[i].code)){
              group.push(value.code+", " + list[i].code +", " + list[j].code)
            }
          }
        }
      }
    }
  });
  return group
}

function handleDouble(list: ICart[]){
  var group:Array<String> = []

  list.forEach( (value, index) => {
    for( let i = 1 ; i < list.length ; i++){
      if(value.code[0] === list[i].code[0]  ){
        if(value.code !== list[i].code ){
          if( !group.includes(value.code + ", " + list[i].code ) && !group.includes(list[i].code + ", " + value.code )){
            group.push(value.code +", " + list[i].code )
          }
        }
      }
    }
  });
  return group
}

const Deck: React.FC = () =>{
  const carts = useSelector( (state:ApplicationState) => state.carts )
  const rotation = useSelector( (state:ApplicationState) => state.rotation )
  const listTriple = handleTriple(carts)
  var listDouble: Array<String> = []
  if(listTriple.length){
    listDouble = handleDouble(carts)
  }
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
        list.map( (cart, index) =>{
         if( index > 4 ){ return ''}
         else{
            if(cart.length === 3){
              return(
                <Cart key={ index } number={cart[0]+cart[1]} naipe={ cart[2] } />
               )
            }
            else{
                return(
                  <Cart key={ index } number={cart[0]} naipe={cart[1]} />
                )
              }
            }
          }
        )
      }
      </Row>
      <Row>
      {
        list.map( (cart, index) =>{
         if(index >= 5 ){
            if(cart.length === 3){
              return(
                <Cart key={ index } number={cart[0] + cart[1]} naipe={ cart[2] } />
              )
            }else{
              return(
                <Cart key={ index } number={cart[0]} naipe={cart[1]} />
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
        <span>Maior Carta: {list[0]}. </span><br/>
        <span>Lista ordenada:
          {
            list.map( (value,index) =>
              index === list.length -1 ?
              <span key={index}> { value }. </span> :
              <span key={ index}> { value }, </span>
            )
          }
        </span> <br></br>
        <span> Full Houses:</span>
        <ul>
          {
            listTriple.length > 0 ?
              listTriple.map(l3 =>
                listDouble.map( l2 => {
                  if(l3[0] !== l2[0] ){
                    return <Li> {l3+", " + l2} </Li>
                  }else{
                    return ''
                  }
                }
              )
            ): 'Nenhum.'
          }
        </ul>

      </Data>
    </Main>
  </Container>
 )
}

export default Deck
