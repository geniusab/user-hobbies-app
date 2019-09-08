import React from 'react'
import './styles.scss'

type HeaderProps = {
  count: number
}

const Header: React.FC<HeaderProps> = ({ count }) => {
  return (
    <header id="header">
      User Hobbies
      <div>total {count} users</div>
    </header>
  )
}

export default Header
