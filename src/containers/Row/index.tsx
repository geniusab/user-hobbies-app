import styled from 'styled-components'

const Row = styled('div')`
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  flex-direction: column;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    flex-direction: row;
  }
`

export default Row
