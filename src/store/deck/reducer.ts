import { ICart, PILE_LOADING} from './types'

interface IAction{
  type: string
  data: any
  rotation:string
}

interface ApplicationState{
  loading: boolean;
  carts: ICart[]
  rotation: string
}

const INITIAL_STATE: ApplicationState = {
  loading: false,


  carts: [
    {
      code: '2H',
      image: 'image1',
      images:{
        png: 'png',
        svg: 'svg'
      },
      suit: 'suit',
      value: 'ACES'
    },
    {
      code: '7D',
      image: 'image1',
      images:{
        png: 'png',
        svg: 'svg'
      },
      suit: 'suit',
      value: 'ACES'
    },{
      code: '10H',
      image: 'image1',
      images:{
        png: 'png',
        svg: 'svg'
      },
      suit: 'suit',
      value: 'ACES'
    },{
      code: '9S',
      image: 'image1',
      images:{
        png: 'png',
        svg: 'svg'
      },
      suit: 'suit',
      value: 'ACES'
    },{
      code: '6D',
      image: 'image1',
      images:{
        png: 'png',
        svg: 'svg'
      },
      suit: 'suit',
      value: 'ACES'
    }],
    rotation: '10H'
}

function Decks( state = INITIAL_STATE, action: IAction) {
  switch( action.type){
      case PILE_LOADING:
        return { ...state, carts : [ ...state.carts, ...action.data ], rotation: action.rotation}

      default:
        return state
  }
}

export default Decks

