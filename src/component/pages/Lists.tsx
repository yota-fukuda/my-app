import React, { useState, useEffect, useContext } from 'react'
import { db } from '../config/firebase'
import { FirebaseContext } from '../config/contexts'
import { List } from '../config/models'
import UpdateDeleteMemo from './UpdateDeleteList'
import { collectionName } from '../config/consts'

const Lists: React.FC = () => {
    const [lists, setLists] = useState<List[]>([
      { id: '', body: '', createdAt: null, updatedAt: null },
    //   { id: '', body: '', creater: '', createdAt: null, updatedAt: null },
    ])

    const { user } = useContext(FirebaseContext)

    useEffect(() => {
        if (user) {
          const unsub = db
            .collection(collectionName.lists)
            // .where('creater', '==', user.email)
            .onSnapshot((snapshot) => {
              // DBからメモ一覧を取得
              const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                body: doc.data().body,
                creater: doc.data().creater,
                createdAt: doc.data().createdAt,
                updatedAt: doc.data().updatedAt,
              }))
              // 取得したメモ一覧をcreatedAtの降順に並び替え
            //   data.sort((a, b) => {
            //     const x = a.createdAt
            //     const y = b.createdAt
            //     if (!x || !y) return 1
            //     if (x < y) {
            //       return 1
            //     } else {
            //       return -1
            //     }
            //   })
              setLists(data)
            })
            return () => unsub()
        }
    },[])

    return (
        <div className='wrap-memo-list'>
      {lists &&
        lists.map((list) => <UpdateDeleteMemo key={list.id} list={list} />)}
    </div>
    )
}
export default Lists;