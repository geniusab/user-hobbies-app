import React from 'react'
import './styles.scss'
import { Header } from './header'

type HeaderProps = {
  count: number
}

const AppHeader: React.FC<HeaderProps> = ({ count }) => {
  return (
    <Header id="header">
      User Hobbies
      <div>total {count} users</div>
    </Header>
  )
}

export default AppHeader
