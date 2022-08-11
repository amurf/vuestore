import { createStore } from '../vuedux'
import axios from 'axios'

const STORE_ID = 'otherStore'

const state = () => {
  return {
    things: [],
  }
}

const initialise = async function() {
  this.things = [1, 2, 3];
}

const methods = {
  addThing() {
    this.things.push("A")
  },
}


/* Tidy this up in the library with helper functions */
export const otherStore = createStore.bind(
  null,
  STORE_ID,
  { 
    state, 
    methods, 
    initialise,
  },
)

export const useOtherStore = otherStore()
export const useOtherStoreSync = otherStore(true)
