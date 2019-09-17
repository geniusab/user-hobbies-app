import React, { useState } from 'react'
import User from '../../../interfaces/User.interface'
import uuidv1 from 'uuid/v1'
import './styles.scss'

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
    <form className="form-user" onSubmit={event => add(event)}>
      <div className="group">
        <input className="input" type="text" value={name} onChange={handleChange} />
        <button className="btn btn-primary" type="submit">
          Add
        </button>
      </div>
    </form>
  )
}

export default AddUser
