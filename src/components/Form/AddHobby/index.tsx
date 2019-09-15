import React, { useState, FunctionComponent } from 'react'
import uuidv1 from 'uuid/v1'
import './styles.scss'
import Hobby from '../../../interfaces/Hobby.interface'
import { Passion } from '../../../interfaces/Passion.interface'

const initState = {
  passion: 'low',
  hobby: '',
  date: new Date().toISOString().split('T')[0],
}

type FormAddProps = {
  addHobby: Function
  userId: Number | String
}

const Passions: Passion = {
  low: 'low',
  medium: 'medium',
  high: 'high',
  very_high: 'very-high',
}

const HobbyAddForm: FunctionComponent<FormAddProps> = ({ addHobby, userId }) => {
  const { add, handleChange, state } = useAddFormHook(addHobby, userId)
  return (
    <form onSubmit={event => add(event)}>
      <div className="group">
        {(Object.keys(state) as Array<keyof typeof state>).map(input => {
          return (
            <div key={input}>
              {input === 'passion' ? (
                <select onChange={e => handleChange(input, e)} value={state[input]}>
                  {(Object.keys(Passions) as Array<keyof typeof Passions>).map(option => (
                    <option key={option} value={Passions[option]}>
                      {Passions[option]}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  placeholder={`Enter ${input}`}
                  className="input"
                  type={input === 'date' ? input : 'text'}
                  value={state[input]}
                  onChange={e => handleChange(input, e)}
                />
              )}
            </div>
          )
        })}
        <button className="btn btn-primary" type="submit">
          Add
        </button>
      </div>
    </form>
  )
}

const useAddFormHook = (addHobby: Function, userId: Number | String) => {
  const [state, setState] = useState(initState)

  const reset = () => {
    setState(initState)
  }

  const add = (event: React.FormEvent<HTMLFormElement>): void => {
    console.log('add')
    event.preventDefault()
    console.log(state.passion)
    if (state.passion.trim() !== '' && state.hobby.trim() !== '') {
      const hobby: Hobby = {
        id: uuidv1(), // mock API generate id, this is not a required field right now
        passion: state.passion,
        hobby: state.hobby,
        createdAt: state.date,
      }
      console.log(hobby)
      addHobby(hobby, userId)
      reset()
    }
  }

  const handleChange = (key: string, e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setState({ ...state, [key]: e.target.value })
  }
  return { add, handleChange, state }
}

export default HobbyAddForm
