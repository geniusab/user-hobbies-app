import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
// interface
import { ApplicationState } from '../../../store/index'
// redux
import { connect } from 'react-redux'
import { deleteHobbyRequest } from '../../../store/hobbies/actions'
// components
import Hobby from '../../../interfaces/Hobby.interface'
import HobbyItem from '../HobbyItem/index'

type HobbyListProps = {
  hobbies: Array<Hobby>
  deleteHobbyRequest: Function // or deleteHobby(id: string | number): void
  selected: string | number
  loading: boolean
}

const HobbyList: React.FC<HobbyListProps> = (props: HobbyListProps) => {
  const [deleteId, setDeleteId] = useState(null)
  const { selected, loading, hobbies, deleteHobbyRequest } = props
  const deleteProcess = useCallback(
    (id?: string | number, selected?: string | number) => {
      setDeleteId(id)
      deleteHobbyRequest(id, selected)
    },
    [deleteHobbyRequest],
  )
  // clear deleteId after call deleteProcess
  useEffect(() => {
    if (!loading) setDeleteId(null)
  }, [deleteProcess, loading])

  const elements = hobbies.map((item, index) => {
    return (
      <tr key={index}>
        {deleteId === item.id ? (
          <td colSpan={4}>
            <Loading>loading...</Loading>
          </td>
        ) : (
          <HobbyItem isLoading={loading} hobby={item} onDeleted={() => deleteProcess(item.id, selected)} />
        )}
      </tr>
    )
  })
  const hobbiesContent = elements.length ? (
    elements
  ) : (
    <tr>
      <td colSpan={4}>This user does not have any hobbies.</td>
    </tr>
  )
  const content =
    loading && !elements.length ? (
      <tr>
        <td colSpan={4}>loading...</td>
      </tr>
    ) : (
      hobbiesContent
    )

  return <>{content}</>
}

// It's usually good practice to only include one context at a time in a connected component.
// Although if necessary, you can always include multiple contexts. Just make sure to
// separate them from each other to prevent prop conflicts.
const mapStateToProps = ({ hobbies }: ApplicationState) => ({
  hobbies: hobbies.hobbies,
  selected: hobbies.selected,
  loading: hobbies.loading,
})

export default connect(
  mapStateToProps,
  { deleteHobbyRequest },
)(HobbyList)

const Loading = styled.div`
  line-height: 40px;
`
