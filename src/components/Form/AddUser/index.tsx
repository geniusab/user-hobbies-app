import React, { useState } from 'react'
import User from '../../../interfaces/User.interface'
import uuidv1 from 'uuid/v1'
import { InputWrap } from '../../../containers/shared'

type AddUser = {
  addUser: Function
}

const AddUser: React.FC<AddUser> = ({ addUser }) => {
  const [name, setName] = useState('')

  const reset = () => {
    setName('')
  }

  const add = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    if (name.trim() !== '') {
      const user: User = {
        id: uuidv1(),
        name: name,
        hobbies: [],
      }
      addUser(user)
      reset()
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
