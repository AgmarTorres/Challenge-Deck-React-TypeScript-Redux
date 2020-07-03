export interface ICard{
  code: string
  image: string
  images:{
    png: string
    svg: string
  }
  suit: string
  value: string
}

export const PILE_LOADING = 'PILE_LOADING';
export const PILE_SUCCESS = 'PILE_SUCCESS';
export const PILE_ERROR = 'PILE_ERROR';
