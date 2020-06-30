import axios from 'axios'

const api = axios.create({
    baseURL: 'https://deckofcardsapi.com/api/deck'
})

export default api;
