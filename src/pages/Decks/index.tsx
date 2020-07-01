import React,{ useState } from 'react'
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
  const [bigValue, setBigValue] = useState('')
  const carts = useSelector( (state:ApplicationState) => state.carts )
  const rotation = useSelector( (state:ApplicationState) => state.rotation )

  const naipes =['H', 'D', 'C', 'S']
  const values = ['2', 'A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3']
  let newValues: Array<String> = []
  let newNaipes: Array<String>=[]
  if(carts.length){
    const indexValue = values.indexOf(rotation[0])
    values.map( (cart, index) =>{ if(indexValue <= index){
      newValues.push(String(cart))
    } })
    values.map( (cart, index) =>{ if(indexValue > index){
        newValues.push(String(cart))
        }
      }
  )

  const indexNaipe = naipes.indexOf(rotation[1])
    naipes.map( (cart, index) =>{ if(indexNaipe <= index){
      newNaipes.push(String(cart))
    } })
    naipes.map( (cart, index) =>{ if(indexNaipe > index){
        newNaipes.push(String(cart))
        }
      }
    )
  }
  console.log(newNaipes)
  return(
   <Container>
    <Header>Deck</Header>
    <Main>
      <Row>
      {
        carts.map( (cart, index) =>{
         if(index === 0 || index > 5 ){}
         else{
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
          }
        )
      }
      </Row>
      <Row>
      {
        carts.map( (cart, index) =>{
         if(index >= 6 ){
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
        <span>Maior Cart: </span><br/>
        <span>Maior Cart:</span>
      </Data>
    </Main>
  </Container>
 )
}

export default Deck
