import React, { useState, useRef, useCallback, useEffect } from 'react'
import api from '../../services/api'
import Input from '../../components/Input'
import { useHistory } from 'react-router-dom'

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web'
import {Container, Main, Header, Rotate,  Row, Data, Button, Line, Deck } from './styles'

interface IDeck{
  name: string
}

interface ICart {
  num:  'A'|'2'| '3'| '4'| '5'| '6'| '7'| '8'| '9'|'0'|'J'|'Q'|'K'
  nap: 'S' | 'D' | 'C' | 'H'
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
  const [ deck, setDeck] = useState<IDeck>()

  useEffect(()=>{
    function getDeck (){

    }
    getDeck()
  },[])

  const handleValidate = useCallback(async ( data: string) => {
    if(data.length < 2){
      return ''
    }

    const number = ['2'  , 'A' , 'K' ,  'Q' , 'J' , '10' ,  '9' , '8' , '7' , '6' , '5' , '4' , '3']
    const naipe = ['C' ,  'D' , 'H' , 'S' ]

    var validNumber = number.filter(value => value === data[0].toUpperCase())
    var validNaipe = naipe.filter(value => value === data[1].toUpperCase())

    if( validNumber.length === 1 && validNaipe.length === 1 ){
      return data.toUpperCase().trim() +','
    }else{
      alert('A Carta '+ data + ' não faz parte do jogo!')
      return ''
    }

  },[])


  const handleSubmit = useCallback(async (data: FormData) => {
    let link= ''
    let rotation = ''
    try {
      rotation += await handleValidate(data.cart0)
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

        const partial = await api.get('https://deckofcardsapi.com/api/deck/new/?cards='+rotation+link)
        console.log( partial.data )
        await api.get('https://deckofcardsapi.com/api/deck/'+ partial.data.deck_id+'/draw/?count=11')
       // const drawR = await api.get('https://deckofcardsapi.com/api/deck/'+ partial.data.deck_id+'/pile/rota/add/?cards='+ rotation)

        const drawA = await api.get('https://deckofcardsapi.com/api/deck/'+ partial.data.deck_id +'/pile/cards/add/?cards='+ rotation + link)
        console.log( drawA.data)
       // const listRotation = await api.get('https://deckofcardsapi.com/api/deck/'+ drawA.data.deck_id +'/pile/rota/list/')
        //console.log( listRotation)
        const listCards = await api.get('https://deckofcardsapi.com/api/deck/'+ drawA.data.deck_id +'/pile/cards/list/')
        console.log(listCards.data.piles.cards.cards)
      }
      else{
        alert('A carta de rotação é obrigatória')
      }
    }
    catch (err) {
    }
  }, [handleValidate]);


  return(
   <Container>
    <Header>Full Houses</Header>
    <Main>
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Deck> Deck: {deck} </Deck>
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
        <Button type="submit"> Adicionar </Button>
      </Data>
    </Form>
    <Line/>
    </Main>
  </Container>
 )
}

export default Forms
