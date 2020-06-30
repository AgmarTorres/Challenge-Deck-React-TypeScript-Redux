import React, { useState, useRef, useCallback, useEffect } from 'react'
import api from '../../services/api'
import Input from '../../components/Input'
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

  const formRef = useRef<FormHandles>(null);
  const [ deck, setDeck] = useState<IDeck>()
  useEffect(()=>{
    function getDeck (){
      api.get('/deck/new').then( response =>{
        setDeck( response.data.deck_id)
      })
    }
    getDeck()
  },[])

  const handleValidate = useCallback(async ( data: string) => {

    if(
      (String((data[0].toUpperCase())) === ( '2'  || 'A' || 'K' ||  'Q' || 'J' || '10' ||  '9' || '8' || '7' || '6' || '5' || '4' || '3'))
      &&
      (String((data[1].toUpperCase())) === ('C' ||  'D' || 'H' || 'S' ))
    ){
      return data.toUpperCase() +','
    }else{
      return ''
    }
  },[])


  const handleSubmit = useCallback(async (data: FormData) => {
    try {
      formRef.current?.setErrors({});
      const cart0 = await handleValidate( data.cart0)
      cart0 ? console.log(true): console.log(false)
      const cart1 = await handleValidate( data.cart1)
      const cart2 = await handleValidate( data.cart2)
      const cart3 = await handleValidate( data.cart3)
      const cart4 = await handleValidate( data.cart4)
      const cart5 = await handleValidate( data.cart5)
      const cart6 = await handleValidate( data.cart6)
      const cart7 = await handleValidate( data.cart7)
      const cart8 = await handleValidate( data.cart8)
      const cart9 = await handleValidate( data.cart9)
      const cart10 = await handleValidate( data.cart10)

      if( cart0 || cart1 || cart2 ||
        cart3 || cart4 || cart5 ||
        cart6 || cart7 || cart8 ||
        cart9 || cart10
      ){
        let link =''
        link=cart10 + cart0 + cart1 + cart2 + cart3 + cart4 + cart5+ cart6+ cart7+ cart8+ cart9
        console.log(link)
        const partial = await api.get('/new/?cards=AS,2S,KS,AD,2D,KD,AC,2C,KC,AH,2H')

        await api.get('https://deckofcardsapi.com/api/deck/'+ partial.data.deck_id+'/draw/?count=1')

        const drawR = await api.get('https://deckofcardsapi.com/api/deck/'+ partial.data.deck_id+'/pile/rotation/add/?cards='+ String(data.cart10))

        await api.get('https://deckofcardsapi.com/api/deck/'+ partial.data.deck_id+'/draw/?count=10')

        const drawA = await api.get('https://deckofcardsapi.com/api/deck/'+ partial.data.deck_id+'/pile/cards/add/?cards=2S,KS,AD,2D,KD,AC,2C,KC,AH,2H')

      }
      else{
        console.log('error')
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
        <Input name="cart0" type="text"  ></Input>
        <Input name="cart1" type="text"  ></Input>
        <Input name="cart2" type="text"  ></Input>
        <Input name="cart3" type="text"  ></Input>
        <Input name="cart4" type="text"  ></Input>
       </Row>
      <Row>
        <Input name="cart5" type="text" ></Input>
        <Input name="cart6" type="text" ></Input>
        <Input name="cart7" type="text" ></Input>
        <Input name="cart8" type="text" ></Input>
        <Input name="cart9" type="text" ></Input>
      </Row>
      <Rotate>
        <h1>Carta de Rotação</h1>
        <Input name="cart10" type="text"></Input>
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
