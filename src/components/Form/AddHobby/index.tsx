import React from 'react'
// interface
// import Hobby from '../../../interfaces/Hobby.interface'
import { Passion } from '../../../interfaces/Passion.interface'
// containers
import DataTable from '../../Styles/shared/DataTable'
import { InputWrap, SelectWrap, Button } from '../../Styles/shared'
// hooks
import useAddFormHook from '../../../hooks/useFormState'
const initState = {
  passion: 'low',
  hobby: '',
  createdAt: new Date().toISOString().split('T')[0],
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
  const { add, handleChange, state } = useAddFormHook(addHobby, userId, initState)
  return (
    <form onSubmit={event => add(event)}>
      <DataTable columns={['Passion', 'Hobby', 'Year', 'Action']}>
        <tr>
          {(Object.keys(state) as Array<keyof typeof state>).map(input => {
            return (
              <td key={input}>
                {input === 'passion' ? (
                  <SelectWrap>
                    <select onChange={e => handleChange(input, e)} value={state[input]}>
                      {(Object.keys(Passions) as Array<keyof typeof Passions>).map(option => (
                        <option key={option} value={Passions[option]}>
                          {Passions[option]}
                        </option>
                      ))}
                    </select>
                  </SelectWrap>
                ) : (
                  <InputWrap>
                    <input
                      placeholder={`Enter ${input}`}
                      type={input === 'createdAt' ? 'date' : 'text'}
                      value={state[input]}
                      onChange={e => handleChange(input, e)}
                    />
                  </InputWrap>
                )}
              </td>
            )
          })}
          <td>
            <Button type="submit">Add</Button>
          </td>
        </tr>
      </DataTable>
    </form>
  )
}

export default HobbyAddForm
