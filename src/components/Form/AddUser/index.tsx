import React, { useState } from 'react'
import User from '../../../interfaces/User.interface'
import uuidv1 from 'uuid/v1'
import './styles.scss'
import ButtonM from '../../../containers/shared/Button'
import { Input, InputWrap } from '../../../containers/shared/Input'

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
        <InputWrap>
          <Input type="text" value={name} onChange={handleChange} placeholder={'Enter name'} />
        </InputWrap>

        <ButtonM color={'primary'}>Add</ButtonM>
      </div>
    </form>
  )
}

export default AddUser
