import styled, { css } from 'styled-components'

export const Link = styled.a`
  font-size: 1rem;
  line-height: 1;
  display: inline-block;
  border-radius: 0.2rem;
  padding: 0.25rem 0.25rem;
  margin: 0 0.25rem;
  background: transparent;
  color: white;
  border: 0.2rem solid white;
  text-decoration: none;

  ${(props) =>
    props.active &&
    css`
      background: deepskyblue !important;
      color: white !important;
      border: 0.2rem solid deepskyblue;
    `}

  &:hover {
    background: white;
    color: black;
  }
`
