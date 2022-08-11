import { reactive } from "vue"

let stores = {}

export function createStore(id, store, refresh) {
  if (stores[id]) {
    return Promise.resolve(stores[id])
  }

  const s = reactive({})
  stores[id] = s
  const methods = Object.keys(store.methods)
                        .reduce((accum, key) => ({ [key]: store.methods[key].bind(s), ...accum }), {})

  s.methods = methods;

  /* Merge state */
  const storeData = store.state()
  const initialState = { 
    ...storeData, 
    _isLoading: false, 
    _isInitialised: false
  }

  s.initialise = async () => {
    if (s._isInitialised) return s

    Object.assign(s, initialState)

    s._isInitialised = false
    await store.initialise.call(s)
    s._isInitialised = true;

    // stores[id] = s

    return s
  }

  s.refresh = async () => {
    s._isLoading = true

    Object.assign(s, initialState)
    await s.initialise(s)

    s._isLoading = false

    return s
  }


  const fn = refresh ? 'refresh' : 'initialise'
  return s[fn]
}
