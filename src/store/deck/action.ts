import {ICart, PILE_LOADING,  PILE_SUCCESS, PILE_ERROR } from './types'

export function addPileAction( data: ICart[] ){

  return { type: PILE_LOADING , data }
}

export function LoadPileAction( data: ICart[] ){
  return { type: PILE_SUCCESS, data }
}

export function ErrorPileAction( error: string ){
  return { type: PILE_ERROR, error }
}

