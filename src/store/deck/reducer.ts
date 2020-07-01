import { ICart, PILE_LOADING, PILE_SUCCESS} from './types'

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
  carts: [],
  rotation: ''
}

function Decks( state = INITIAL_STATE, action: IAction) {
  switch( action.type){
      case PILE_LOADING:
      return { carts : [ ], rotation: '', loading: false}

      case PILE_SUCCESS:
        return { ...state, carts : [ ...state.carts, ...action.data ], rotation: action.rotation}

      default:
        return state
  }
}

export default Decks

