import styled from 'styled-components'

interface Props {
  mt_20?: boolean
  margin?: string
}

// const MarginSelector = (margin:string) => (props: Props) => (props.mt_20 ? '20px auto' : '0 auto')

export const Container = styled('div')`
  margin: ${(props: Props) => (props.mt_20 ? '20px auto' : '0 auto')};
  width: 100%;
  max-width: ${props => props.theme.widths.xl};
`

export const ContentWrap = styled('div')`
  width: 100%;
  margin: ${(props: Props) => {
    switch (props.margin) {
      case 'mlr_8':
        return '0 8px'
      case 'mlr_16':
        return '0 16px'
      default:
        return 0
    }
  }};
`
