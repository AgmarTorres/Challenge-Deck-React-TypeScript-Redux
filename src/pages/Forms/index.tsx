import React, { useState, useRef, useCallback, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web'
import {Container, Main, Header, Rotate,  Row, Data, Button, Line, Deck } from './styles'

import api from '../../services/api'
import Input from '../../components/Input'

import {addPileAction, cleanPileAction} from '../../store/deck/action'
import {ICart} from '../../store/deck/types'
interface IDeck{
  name: string
}

interface FormData {
  cart0: string;
  cart1: string;
  cart2: string;
  cart3: string;
  cart4: string;
  cart5: string;
  cart6: string;
  cart7: string;
  cart8: string;
  cart9: string;
  cart10: string;
}

const Forms: React.FC = () =>{
  const history = useHistory();

  const formRef = useRef<FormHandles>(null);
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(()=>{
    function cleanDeck (){
      dispatch(cleanPileAction())
    }
    cleanDeck()
  },[dispatch])

  const handleValidate = useCallback(async ( data: string) => {
    if( data.length <2){
      return ''
    }

    const number = ['2'  , 'A' , 'K' ,  'Q' , 'J' , '10' ,  '9' , '8' , '7' , '6' , '5' , '4' , '3']
    const naipe = ['C' ,  'D' , 'H' , 'S' ]
    var validNaipe
    //Validando o 10
    if( data[0]==='1' && data[1]==='0' ){
      validNaipe = naipe.filter(value => value === data[2].toUpperCase())

      if(validNaipe.length === 1){
        return data.toUpperCase().trim() +','
      }
      return 'ERROR'
    }

    var validNumber = number.filter(value => value === data[0].toUpperCase())
    validNaipe = naipe.filter(value => value === data[1].toUpperCase())

    if( validNumber.length === 1 && validNaipe.length === 1 ){
      return data.toUpperCase().trim() +','
    }else{
      alert('A Carta '+ data + ' não faz parte do jogo!')
      return ''
    }

  },[])


  const handleSubmit = useCallback(async (data: FormData) => {
    setLoading(true)
    let link= ''
    let rotation = ''
    try {
      rotation += await handleValidate(data.cart0)
      rotation = rotation.replace(",", "");
      if(rotation.length > 0 ){
        link += await handleValidate(data.cart1)
        link += await handleValidate(data.cart2)
        link += await handleValidate(data.cart3)
        link += await handleValidate(data.cart4)
        link += await handleValidate(data.cart5)
        link += await handleValidate(data.cart6)
        link += await handleValidate(data.cart7)
        link += await handleValidate(data.cart8)
        link += await handleValidate(data.cart9)
        link += await handleValidate(data.cart10)

        if( link.includes('ERROR')){
          link = ''
          setLoading(false)
        }else{
          const partial = await api.get('https://deckofcardsapi.com/api/deck/new/?cards='+rotation+link)
          await api.get('https://deckofcardsapi.com/api/deck/'+ partial.data.deck_id+'/draw/?count=11')
          const drawA = await api.get('https://deckofcardsapi.com/api/deck/'+ partial.data.deck_id +'/pile/cards/add/?cards='+ link)
          const response = await api.get('https://deckofcardsapi.com/api/deck/'+ drawA.data.deck_id +'/pile/cards/list/')
          const listCards: ICart[] = response.data.piles.cards.cards
          dispatch(addPileAction(listCards, rotation))
          setLoading(false)
          history.push('/deck/'+drawA.data.deck_id )
        }
      }
      else{
        setLoading(false)
        alert('A carta de rotação é obrigatória')
      }
    }
    catch (err) {
    }
  }, [handleValidate, dispatch, history]);


  return(
   <Container>
    <Header>Full Houses</Header>
    <Main>
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Deck> Deck </Deck>
      <Row>
        <Input name="cart1" type="text"  ></Input>
        <Input name="cart2" type="text"  ></Input>
        <Input name="cart3" type="text"  ></Input>
        <Input name="cart4" type="text"  ></Input>
        <Input name="cart5" type="text" ></Input>
       </Row>
      <Row>
        <Input name="cart6" type="text" ></Input>
        <Input name="cart7" type="text" ></Input>
        <Input name="cart8" type="text" ></Input>
        <Input name="cart9" type="text" ></Input>
        <Input name="cart10" type="text"  ></Input>
      </Row>
      <Rotate>
        <h1>Carta de Rotação</h1>
        <Input name="cart0" type="text"></Input>
      </Rotate>
      <Data>
        <Button type="submit">{ loading? 'Loading ': 'Adicionar' }  </Button>
      </Data>
    </Form>
    <Line/>
    </Main>
  </Container>
 )
}

export default Forms
