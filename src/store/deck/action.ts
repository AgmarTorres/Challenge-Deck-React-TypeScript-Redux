import {ICart, PILE_LOADING,  PILE_SUCCESS, PILE_ERROR } from './types'

export function addPileAction( data: ICart[], rotation: string ){
  return { type: PILE_LOADING , data, rotation }
}

export function LoadPileAction( data: ICart[], rotation:string ){
  return { type: PILE_SUCCESS, data, rotation }
}

export function ErrorPileAction( error: string ){
  return { type: PILE_ERROR, error }
}

