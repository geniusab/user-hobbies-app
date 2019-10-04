import React from 'react'
// styles
import { HeaderInner, HeaderRight, ThemeSwitcherButton, Title, Wrapper } from './styles'
// containers
import ThemLayout from '../../containers/ThemLayout'

type HeaderProps = {
  count?: number
  theme?: string
  setTheme?: Function
}

const Header: React.FC<HeaderProps> = props => {
  return (
    <Wrapper>
      <HeaderInner>
        <Title>User Hobbies</Title>
        <HeaderRight>Total {props.count} users</HeaderRight>
        <ThemLayout>
          {({ theme, setTheme }) => (
            <ThemeSwitcherButton onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Mode {theme}</ThemeSwitcherButton>
          )}
        </ThemLayout>
      </HeaderInner>
    </Wrapper>
  )
}

export default Header
