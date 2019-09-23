import React, { useState } from 'react'
import uuidv1 from 'uuid/v1'
import Hobby from '../../../interfaces/Hobby.interface'
import { Passion } from '../../../interfaces/Passion.interface'
// import './styles.scss'
import DataTable from '../../HobbyList/DataTable'
import styled from 'styled-components'

const initState = {
  passion: 'low',
  hobby: '',
  date: new Date().toISOString().split('T')[0],
}

type FormAddProps = {
  addHobby: Function
  userId: string | number
}

const Passions: Passion = {
  low: 'low',
  medium: 'medium',
  high: 'high',
  very_high: 'very-high',
}

const HobbyAddForm: React.FC<FormAddProps> = ({ addHobby, userId }) => {
  const { add, handleChange, state } = useAddFormHook(addHobby, userId)
  return (
    <form onSubmit={event => add(event)}>
      <DataTable columns={['Passion', 'Hobby', 'Year', 'Action']}>
        <tr>
          {(Object.keys(state) as Array<keyof typeof state>).map(input => {
            return (
              <td key={input}>
                {input === 'passion' ? (
                  <Select onChange={e => handleChange(input, e)} value={state[input]}>
                    {(Object.keys(Passions) as Array<keyof typeof Passions>).map(option => (
                      <option key={option} value={Passions[option]}>
                        {Passions[option]}
                      </option>
                    ))}
                  </Select>
                ) : (
                  <Input
                    placeholder={`Enter ${input}`}
                    className="input"
                    type={input === 'date' ? input : 'text'}
                    value={state[input]}
                    onChange={e => handleChange(input, e)}
                  />
                )}
              </td>
            )
          })}
          <td>
            <Button className="btn btn-primary" type="submit">
              Add
              {/*<i className="fa fa-plus-square" />*/}
            </Button>
          </td>
        </tr>
      </DataTable>
    </form>
  )
}

const useAddFormHook = (addHobby: Function, userId: Number | String) => {
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
        createdAt: state.date,
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

export default HobbyAddForm

const Input = styled('input')`
  background: none;
  color: #424242;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border-radius: 0;
  border: 1px solid #ced4da;
  height: 100%;
`

const Select = styled('select')`
  height: 100%;
  padding: 10px 10px 10px 5px;
  display: inline-block;
  width: 100%;
  font-size: 18px;
  font-weight: 400;
  color: #495057;
  vertical-align: middle;
  background-color: #fff;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  text-transform: capitalize;
`

const Button = styled('button')`
  background-color: ${props => props.theme.colors.brand};
  color: ${props => props.theme.colors.white};
  box-sizing: border-box;
  position: relative;
  user-select: none;
  cursor: pointer;
  outline: 0;
  border: none;
  -webkit-tap-highlight-color: transparent;
  display: inline-block;
  white-space: nowrap;
  text-decoration: none;
  vertical-align: baseline;
  text-align: center;
  margin: 0;
  min-width: 64px;
  line-height: 36px;
  padding: 0 16px;
  border-radius: 4px;
  overflow: visible;
  transform: translate3d(0, 0, 0);
  transition: background 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #333;
    color: ${props => props.theme.colors.white};
  }
`
