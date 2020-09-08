import { createContext, useContext } from 'react'
import { types, onSnapshot, getSnapshot } from 'mobx-state-tree'
import { Search } from './search'
import { USE_FAKE_API, getUnsplashSearchTestData } from '../api/api'

const RootModel = types.model('RootModel', {
  search: Search,
})

const initialState = {
  search: {
    total: 0,
    total_pages: 0,
    query: '',
    state: 'done',
    images: [],
  },
}

// Load initial test data when we're using the fake API.
if (USE_FAKE_API) {
  const td = getUnsplashSearchTestData()
  initialState.search.total = td.total
  initialState.search.total_pages = td.total_pages
  initialState.search.images = td.results
}

export const rootStore = RootModel.create(initialState)

// Listen for new snapshots and print.
onSnapshot(rootStore, (snapshot) => {
  console.log('[mst] on snapshot:', snapshot)
})

console.log('[mst] snapshot:', getSnapshot(rootStore))

const RootContext = createContext(null)

export const Provider = RootContext.Provider

export function useMst() {
  const store = useContext(RootContext)
  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider')
  }
  return store
}
