import React from 'react'
import styled from 'styled-components'

interface RootProps {
  className?: string
}

const Container: React.FC<RootProps> = ({ children }) => <Wrapper>{children}</Wrapper>

export default Container

const Wrapper = styled('div')`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.body};
  color: ${props => props.theme.colors.font};
`
