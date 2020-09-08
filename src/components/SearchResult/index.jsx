import React from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'
import { useMst } from '../../store'
import CircularProgress from '@material-ui/core/CircularProgress'
import Image from '../Image'

const Wrapper = styled.section`
  padding: 4rem 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
`

const ProgressWrapper = styled.section`
  padding: 8rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SearchResult = () => {
  const { search } = useMst()

  if (search.state === 'pending') {
    return (
      <ProgressWrapper>
        <CircularProgress size={150} />
      </ProgressWrapper>
    )
  }

  return (
    <Wrapper>
      {search.images.map((x) => (
        <Image id={x.id} key={x.id} />
      ))}
    </Wrapper>
  )
}

export default observer(SearchResult)
