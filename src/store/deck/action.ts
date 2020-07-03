import {ICard, PILE_LOADING,  PILE_SUCCESS, PILE_ERROR } from './types'

export function addPileAction( data: ICard[], rotation: string ){
  return { type: PILE_SUCCESS , data, rotation }
}

export function cleanPileAction(){
  const data:ICard[] = []
  const rotation= ''
  return { type: PILE_LOADING , data, rotation }
}

export function ErrorPileAction( error: string ){
  return { type: PILE_ERROR, error }
}

