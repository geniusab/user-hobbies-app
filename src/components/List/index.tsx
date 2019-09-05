import React, { useEffect, useState } from 'react'
import UserCard from './User'
import ListUser from '../../interfaces/ListUsers'
import UserCardList from './User'
import HobbyList from './Hobby'
import User from '../../interfaces/User.interface'

import './styles.scss'
import { number } from 'prop-types'

const List = (props: any): any => {
  const { users } = props
  const [selected, setSelected] = useState<string | number>(1)
  const [select_hobbies, setSelect_hobbies] = useState<any>([])

  // const onUseSelected = () => {
  //     setSelected()
  // }
  const onItemSelected = (selectedItem: string | number): void => {
    setSelected(selectedItem)
    const [hobbies] = users.filter((obj: User) => obj.id === selected)
    if (hobbies) {
      console.log(hobbies.hobbies)
      setSelect_hobbies(hobbies.hobbies)
    }
  }

  useEffect(() => {
    onItemSelected(selected)
  }, [setSelect_hobbies])

  return (
    <div className="list">
      <UserCardList users={users} onItemSelected={onItemSelected} />
      <HobbyList hobbies={select_hobbies} />
      {/*{*/}
      {/*users.map((item) => {*/}
      {/*return (*/}
      {/*<UserCardList*/}
      {/*key={item.id}*/}
      {/*first_name={item.first_name}*/}
      {/*hobbies={item.hobbies}*/}

      {/*/>*/}
      {/*)*/}
      {/*})*/}
      {/*}*/}
      {/*{*/}
      {/*users.map((item) => {*/}
      {/*return (*/}
      {/*<div onClick={() => setUser(item)}>{item.first_name}</div>*/}
      {/*)*/}
      {/*})*/}
      {/*}*/}
      {/*{*/}
      {/*user.hobbies.map((item) => {*/}
      {/*return (*/}
      {/*<UserCard*/}
      {/*key={item.id}*/}
      {/*first_name={item.first_name}*/}
      {/*hobbies={item.hobbies}*/}
      {/*/>*/}
      {/*)*/}
      {/*})*/}
      {/*}*/}
    </div>
  )
}

export default List
