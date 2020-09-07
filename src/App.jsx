import React from 'react'
import styled from 'styled-components'
import 'normalize.css'
import './global.css'
import { Provider, rootStore } from './store'
import ImageSearchBar from './components/ImageSearchBar'
import Title from './components/Title'
import SearchResult from './components/SearchResult'

const Wrapper = styled.section`
  min-height: 100vh;
  padding: 4em;
  background: papayawhip;
`

const App = () => (
  <Provider value={rootStore}>
    <Wrapper>
      <Title>Another visitor! Stay a while; Stay FOREVER!</Title>
      <ImageSearchBar />
      <SearchResult />
    </Wrapper>
  </Provider>
)

export default App
