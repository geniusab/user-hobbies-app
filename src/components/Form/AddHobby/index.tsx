import React, { useState, FunctionComponent } from 'react'
import uuidv1 from 'uuid/v1'
import './styles.scss'
import Hobby from '../../../interfaces/Hobby.interface'

const initState = {
  passion: '',
  hobby: '',
  date: Date.now().toLocaleString(),
}

type FormAddProps = {
  addHobby: Function
}

const HobbyAddForm: FunctionComponent<FormAddProps> = ({ addHobby }) => {
  const { add, handleChange, state } = useAddFormHook(addHobby)

  return (
    <form onSubmit={event => add(event)}>
      <div className="group">
        {(Object.keys(state) as Array<keyof typeof state>).map(input => {
          return (
            <input
              placeholder={`Enter ${input}`}
              className="input"
              type={input === 'date' ? input : 'text'}
              value={state[input]}
              onChange={e => handleChange(input, e)}
            />
          )
        })}
        <button className="btn btn-primary" type="submit">
          Add
        </button>
      </div>
    </form>
  )
}

const useAddFormHook = (addHobby: Function) => {
  const [state, setState] = useState(initState)

  const reset = () => {
    setState(initState)
  }

  const add = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    if (state.passion.trim() !== '' && state.hobby.trim() !== '') {
      const hobby: Hobby = {
        passion: state.passion,
        hobby: state.hobby,
        year: new Date(state.date).toLocaleDateString(),
      }

      addHobby(hobby)
      reset()
    }
  }

  const handleChange = (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [key]: e.target.value })
  }
  return { add, handleChange, state }
}

export default HobbyAddForm
