import { createStore } from '../vuedux'
import axios from 'axios'

const STORE_ID = 'mainStore'

const state = () => {
  return {
    message: '',
  }
}

const initialise = async function() {
  const { data } = await 
    axios.get('https://dummyjson.com/products/1')

  this.message = data;
}

const methods = {}

/* Tidy this up in the library with helper functions */
export const useMainStore = createStore(
  STORE_ID,
  { 
    state, 
    methods, 
    initialise,
  },
)
