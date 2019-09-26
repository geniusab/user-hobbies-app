import styled from 'styled-components'

interface Props {
  mt_20?: boolean
}

const Container = styled('div')`
  margin: ${(props: Props) => (props.mt_20 ? '20px auto' : '0 auto')};
  width: 100%;
  max-width: ${props => props.theme.widths.xl};
`

export default Container
