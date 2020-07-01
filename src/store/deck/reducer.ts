import { ICart, PILE_LOADING,  PILE_SUCCESS, PILE_ERROR } from './types'

interface IAction{
  type: string
  data: any
}

interface ApplicationState{
  loading: boolean;
  carts: ICart[]
}

const INITIAL_STATE: ApplicationState = {
  loading: false,
  carts: [
    {
      code: 'AS',
      image: 'image1',
      images:{
        png: 'png',
        svg: 'svg'
      },
      suit: 'suit',
      value: 'ACES'
    },
    {
      code: 'AS',
      image: 'image1',
      images:{
        png: 'png',
        svg: 'svg'
      },
      suit: 'suit',
      value: 'ACES'
    },{
      code: 'AS',
      image: 'image1',
      images:{
        png: 'png',
        svg: 'svg'
      },
      suit: 'suit',
      value: 'ACES'
    },{
      code: 'AS',
      image: 'image1',
      images:{
        png: 'png',
        svg: 'svg'
      },
      suit: 'suit',
      value: 'ACES'
    },{
      code: 'AS',
      image: 'image1',
      images:{
        png: 'png',
        svg: 'svg'
      },
      suit: 'suit',
      value: 'ACES'
    },{
      code: 'AS',
      image: 'image1',
      images:{
        png: 'png',
        svg: 'svg'
      },
      suit: 'suit',
      value: 'ACES'
    },{
      code: 'AS',
      image: 'image1',
      images:{
        png: 'png',
        svg: 'svg'
      },
      suit: 'suit',
      value: 'ACES'
    },{
      code: 'AS',
      image: 'image1',
      images:{
        png: 'png',
        svg: 'svg'
      },
      suit: 'suit',
      value: 'ACES'
    },{
      code: 'AS',
      image: 'image1',
      images:{
        png: 'png',
        svg: 'svg'
      },
      suit: 'suit',
      value: 'ACES'
    },
  ]
}

function Decks( state = INITIAL_STATE, action: IAction) {
  switch( action.type){
      case PILE_SUCCESS:
        return { ...state, carts : [ ...state.carts]  }
      default:
        return state
  }
}

export default Decks
