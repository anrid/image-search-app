import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  font-size: 4rem;
  text-align: center;
  color: palevioletred;
  margin-bottom: 4rem;
  font-family: 'Lalezar', cursive;
`

const Title = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default Title
