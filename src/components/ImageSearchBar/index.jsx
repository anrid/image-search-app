import React, { useState, useEffect } from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'
import SearchBar from 'material-ui-search-bar'
import { useMst } from '../../store'

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const StyledSearchBar = styled(SearchBar)`
  &.MuiPaper-root {
    height: 8rem;
    min-width: 50%;
  }
  .MuiInputBase-root {
    font-size: 4rem;
    height: 8rem;
  }
  .MuiInput-input {
    font-size: 4rem;
    height: 8rem;
  }
  .MuiSvgIcon-root {
    font-size: 4rem;
  }
`

const Metadata = styled.div`
  height: 8rem;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

// Make sure we set this up outside of our render function!
let debouncedSearch

const ImageSearchBar = () => {
  const [query, setQuery] = useState('')

  const { search } = useMst()

  // Debounce the search to keep invalid / pointless API calls
  // to a minimum!
  if (!debouncedSearch) {
    debouncedSearch = debounce(search.search, 500)
  }

  return (
    <Wrapper>
      <StyledSearchBar
        value={query}
        onChange={(value) => {
          console.log('on change:', value)
          setQuery(value)
          debouncedSearch(value)
        }}
        onCancelSearch={() => {
          console.log('on cancel search:', query)
        }}
        onRequestSearch={() => {
          console.log('on request search:', query)
          debouncedSearch(query)
        }}
      />
      {search.total ? <Metadata>Found {search.total} images</Metadata> : null}
    </Wrapper>
  )
}

// Shamelessly borrowed from underscore.debounce.
function debounce(func, wait, immediate) {
  var timeout
  return function () {
    var context = this,
      args = arguments
    var later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    var callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

export default observer(ImageSearchBar)
