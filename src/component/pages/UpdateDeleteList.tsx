import React, { useState, useContext, useCallback } from 'react'
import firebase from 'firebase/app'
import { updateDoc, deleteDoc } from '../config/firebase'
import { FirebaseContext } from '../config/contexts'
import { List } from '../config/models'
import { collectionName } from '../config/consts'

const UpdateDeleteMemo: React.FC<{ list: List }> = ({ list }) => {
  const [input, setInput] = useState('')
  const { user } = useContext(FirebaseContext)

  const onUpdate = useCallback(
    (event) => {
      event.preventDefault()

      updateDoc(collectionName.lists, {
        id: list.id,
        body: input,
        // creater: user ? user.email : null,
        createdAt: list.createdAt,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      })

      alert('更新しました。')
    },
    [input]
  )

  const onDelete = useCallback((event) => {
    event.preventDefault()

    deleteDoc(collectionName.lists, {
      id: list.id,
      body: list.body,
      // creater: list.creater,
      createdAt: list.createdAt,
      updatedAt: list.updatedAt,
    })
  }, [])

  return (
    <div className='wrap-update-delete-memo'>
      <textarea onChange={(e) => setInput(e.target.value)}>
        {list.body}
      </textarea>
      <button onClick={onUpdate}>更新</button>
      <button onClick={onDelete}>削除</button>
      <hr />
    </div>
  )
}

export default UpdateDeleteMemo