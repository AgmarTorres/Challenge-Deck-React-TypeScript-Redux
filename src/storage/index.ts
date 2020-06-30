import { createStore } from 'redux'
import Decks from './deck/reducer'

const store = createStore(Decks)

export default store;
