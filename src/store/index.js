import regeneratorRuntime from 'regenerator-runtime'
import { createContext, useContext } from 'react'
import { types, onSnapshot, getSnapshot } from 'mobx-state-tree'
import { Search } from './search'

const RootModel = types.model('RootModel', {
  search: Search,
})

export const rootStore = RootModel.create({
  search: {
    total: 0,
    total_pages: 0,
    query: '',
    state: 'done',
    images: [],
  },
})

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
