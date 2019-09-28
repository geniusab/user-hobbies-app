import React, { FunctionComponent, useCallback, useEffect, useState } from 'react'
import { connect } from 'react-redux'

import Hobby from '../../interfaces/Hobby.interface'
import HobbyItem from '../HobbyItem'
// import { HobbyState } from '../../store/hobbies'
import { deleteHobbyRequest } from '../../store/hobbies/actions'
import styled from 'styled-components'

type HobbyListProps = {
  hobbies: Array<Hobby>
  deleteHobbyRequest: Function // or deleteHobby(id: string | number): void
  selected: string | number
  loading: boolean
}

const HobbyList: FunctionComponent<HobbyListProps> = (props: HobbyListProps) => {
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
      <React.Fragment key={index}>
        {deleteId === item.id ? (
          <tr>
            <td colSpan={4}>
              <Loading>loading...</Loading>
            </td>
          </tr>
        ) : (
          <tr>
            <HobbyItem isLoading={loading} hobby={item} onDeleted={() => deleteProcess(item.id, selected)} />
          </tr>
        )}
      </React.Fragment>
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
// HobbyState
const mapStateToProps = (state: any) => ({
  hobbies: state.hobbies.hobbies,
  selected: state.hobbies.selected,
  loading: state.hobbies.loading,
})

export default connect(
  mapStateToProps,
  { deleteHobbyRequest },
)(HobbyList)

const Loading = styled.div`
  line-height: 40px;
`
