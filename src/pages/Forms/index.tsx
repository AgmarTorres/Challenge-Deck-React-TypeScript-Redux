import React, { useState, useRef, useCallback } from 'react'

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web'
import {Container, Main, Header, Rotate, Input,  Row, Data, Button,Line } from './styles'

interface ICart {
  num: string
  nap: string
}

interface SignInFormData {
  email:string;
}

const Forms: React.FC = () =>{
const formRef = useRef<FormHandles>(null);

  const [ data, setData] = useState<ICart[]>([])
  const [ error, setError] = useState(false)
  const handleSubmit = useCallback(async (data: SignInFormData) => {
    try {

      }
      catch (err) {
      }
    }, []);


  return(
   <Container>
    <Header>Forms</Header>
    <Main>
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Row>
        <Input name="cart1" type="text"  error ></Input>
        <Input name="cart1" type="text"  error ></Input>
        <Input name="cart1" type="text"  error ></Input>
        <Input name="cart1" type="text"  error ></Input>
        <Input name="cart1" type="text"  error ></Input>
       </Row>
      <Row>
        <Input name="cart1" type="text"  error ></Input>
        <Input name="cart1" type="text"  error ></Input>
        <Input name="cart1" type="text"  error ></Input>
        <Input name="cart1" type="text"  error ></Input>
        <Input name="cart1" type="text"  error ></Input>
      </Row>
      <Rotate>
        <h1>Carta de Rotação</h1>
        <Input></Input>
      </Rotate>
      <Data>
        <Input placeholder='Digite a carta'></Input>
        <Button> Adicionar </Button>
      </Data>
    </Form>
    <Line/>
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Row>
        <Input name="cart1" type="text"  error ></Input>
        <Input name="cart1" type="text"  error ></Input>
        <Input name="cart1" type="text"  error ></Input>
        <Input name="cart1" type="text"  error ></Input>
        <Input name="cart1" type="text"  error ></Input>
       </Row>
      <Row>
        <Input name="cart1" type="text"  error ></Input>
        <Input name="cart1" type="text"  error ></Input>
        <Input name="cart1" type="text"  error ></Input>
        <Input name="cart1" type="text"  error ></Input>
        <Input name="cart1" type="text"  error ></Input>
      </Row>
      <Rotate>
        <h1>Carta de Rotação</h1>
        <Input></Input>
      </Rotate>
      <Data>
        <Button> Adicionar </Button>
      </Data>
    </Form>

    </Main>
  </Container>
 )
}

export default Forms
