import { useState } from 'react'
import React from 'react'
import Hobby from '../interfaces/Hobby.interface'
import uuidv1 from 'uuid/v1'

type initStateProps = {
  passion: string
  hobby: string
  createdAt: string
}

const useAddFormHook = (addHobby: Function, userId: Number | String, initState: initStateProps) => {
  const [state, setState] = useState(initState)

  const reset = () => {
    setState(initState)
  }

  const add = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    if (state.passion.trim() !== '' && state.hobby.trim() !== '') {
      const hobby: Hobby = {
        id: uuidv1(), // mock API generate id, this is not a required field right now
        passion: state.passion,
        hobby: state.hobby,
        createdAt: state.createdAt,
      }
      addHobby(hobby, userId)
      reset()
    }
  }

  const handleChange = (key: string, e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setState({ ...state, [key]: e.target.value })
  }
  return { add, handleChange, state }
}

export default useAddFormHook
