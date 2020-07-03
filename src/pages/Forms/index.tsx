import React, { useState, useRef, useCallback, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web'
import {Container, Main, Header, Rotate,  Row, Data, Button, Line, Deck } from './styles'

import api from '../../services/api'
import Input from '../../components/Input'

import {addPileAction, cleanPileAction} from '../../store/deck/action'
import {ICard} from '../../store/deck/types'
interface IDeck{
  name: string
}

interface FormData {
  card0: string;
  card1: string;
  card2: string;
  card3: string;
  card4: string;
  card5: string;
  card6: string;
  card7: string;
  card8: string;
  card9: string;
  card10: string;
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
      rotation += await handleValidate(data.card0)
      rotation = rotation.replace(",", "");
      if(rotation.length > 0 ){
        link += await handleValidate(data.card1)
        link += await handleValidate(data.card2)
        link += await handleValidate(data.card3)
        link += await handleValidate(data.card4)
        link += await handleValidate(data.card5)
        link += await handleValidate(data.card6)
        link += await handleValidate(data.card7)
        link += await handleValidate(data.card8)
        link += await handleValidate(data.card9)
        link += await handleValidate(data.card10)
        if( link.includes('ERROR')){
          link = ''
          setLoading(false)
        }else{
          const partial = await api.get('https://deckofcardsapi.com/api/deck/new/?cards='+rotation+link)
          await api.get('https://deckofcardsapi.com/api/deck/'+ partial.data.deck_id+'/draw/?count=11')
          const drawA = await api.get('https://deckofcardsapi.com/api/deck/'+ partial.data.deck_id +'/pile/cards/add/?cards='+ link)
          const response = await api.get('https://deckofcardsapi.com/api/deck/'+ drawA.data.deck_id +'/pile/cards/list/')
          const listCards: ICard[] = response.data.piles.cards.cards
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
        <Input name="card1" type="text"  ></Input>
        <Input name="card2" type="text"  ></Input>
        <Input name="card3" type="text"  ></Input>
        <Input name="card4" type="text"  ></Input>
        <Input name="card5" type="text" ></Input>
       </Row>
      <Row>
        <Input name="card6" type="text" ></Input>
        <Input name="card7" type="text" ></Input>
        <Input name="card8" type="text" ></Input>
        <Input name="card9" type="text" ></Input>
        <Input name="card10" type="text"  ></Input>
      </Row>
      <Rotate>
        <h1>Carta de Rotação</h1>
        <Input name="card0" type="text"></Input>
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
