import styled from 'styled-components'

export const Wrapper = styled('header')`
  padding: 0.5rem 1.5rem;
  min-height: 64px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  background-color: ${props => props.theme.colors.brand};
`

export const HeaderInner = styled('div')`
  min-height: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: row;
  }
`

export const Title = styled('h2')`
  margin: 0;
  font-weight: 500;
  color: ${props => props.theme.colors.white};
`

export const HeaderRight = styled('div')`
  color: ${props => props.theme.colors.white};
`

export const ThemeSwitcherButton = styled('button')`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 3px;
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.brand};
  border: 1px solid ${props => props.theme.colors.white};
  &:hover,
  &:focus {
    background-color: transparent;
    box-shadow: 0 0 0 0.2rem #757ce8;
    color: ${props => props.theme.colors.white};
  }
`
