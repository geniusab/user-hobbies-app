import React, { useState } from 'react'
import uuidv1 from 'uuid/v1'
// interface
import User from '../../../interfaces/User.interface'
// containers
import { InputWrap } from '../../Styles/shared'

type AddUser = {
  addUser: Function
}

const AddUser: React.FC<AddUser> = ({ addUser }) => {
  const [name, setName] = useState('')

  const add = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    if (name.trim() !== '') {
      const user: User = {
        id: uuidv1(),
        name: name,
        hobbies: [],
      }
      addUser(user)
      setName('')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  return (
    <form onSubmit={event => add(event)}>
      <div className="group">
        <InputWrap one>
          <input type="text" value={name} onChange={handleChange} placeholder={'Enter name'} />
        </InputWrap>
      </div>
    </form>
  )
}

export default AddUser
