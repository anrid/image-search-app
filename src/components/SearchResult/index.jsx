import React from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'
import { useMst } from '../../store'
import CircularProgress from '@material-ui/core/CircularProgress'

const Wrapper = styled.section`
  padding: 8rem 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
`

const Image = styled.div`
  width: 15rem;
  height: 15rem;
  background-size: cover;
  background-position: center center;
  background-image: url(${(props) => props.url});
  border-radius: 1rem;
  margin: 0.5rem;
`

const SearchResult = () => {
  const root = useMst()

  if (root.search.state === 'pending') {
    return (
      <Wrapper>
        <CircularProgress size={150} />
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      {root.search.images.map((x) => (
        <Image url={x.urls.thumb} key={x.id} />
      ))}
    </Wrapper>
  )
}

export default observer(SearchResult)
