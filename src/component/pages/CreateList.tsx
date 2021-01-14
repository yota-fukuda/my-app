import React, { useState, useContext, useCallback } from 'react'
import { withRouter } from 'react-router-dom'
import { addDoc } from '../config/firebase'
// import { FirebaseContext } from '../config/contexts'
import firebase from 'firebase/app'
import { collectionName } from '../config/consts'

const CreateList: React.FC = () => {
  const [input, setInput] = useState('')
//   const { user } = useContext(FirebaseContext)

  const onCreate = useCallback(
    async (event) => {
      event.preventDefault()
      await addDoc(collectionName.lists, {
        body: input,
        // creater: user ? user.email : null,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      })

      setInput('');
      console.log(onCreate)
    },
    [input]
  )

  return (
    <div className='wrap-create-memo'>
      <textarea
        placeholder='入力してください。'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={onCreate} disabled={!input}>
        追加
      </button>
    </div>
  )
}

export default withRouter(CreateList)