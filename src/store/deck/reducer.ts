import { ICard, PILE_LOADING, PILE_SUCCESS} from './types'

interface IAction{
  type: string
  data: any
  rotation:string
}

interface ApplicationState{
  loading: boolean;
  cards: ICard[]
  rotation: string
}

const INITIAL_STATE: ApplicationState = {
  loading: false,
  cards: [],
  rotation: ''
}

function Decks( state = INITIAL_STATE, action: IAction) {
  switch( action.type){
      case PILE_LOADING:
      return { cards : [ ], rotation: '', loading: false}

      case PILE_SUCCESS:
        return { ...state, cards : [ ...state.cards, ...action.data ], rotation: action.rotation}

      default:
        return state
  }
}

export default Decks

