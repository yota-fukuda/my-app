import React, {useState, useEffect} from 'react'
import firebase from './component/config/firebase'

const AuthContext = React.createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState()
  // contextで別のコンポーネントに渡したい値（ログイン済みユーザーのデータ）
  //をルールに従って指定する

  //todo:1. ログイン済みユーザーのデータを取得
  // firebase.auth().onAuthStateChanged(user => {
  //   setUser(user)
  // })
  // ↓上記コードを下記に書き換えられる。setUserが変わるときにuserに引数が書き換えられるから。
  // firebase.auth().onAuthStateChanged(setUser)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setUser)
  },[]) //空の配列を渡すことで、コンポーネントの初回描写時にのみ実行するように設定

  // todo:2. 1で取得したデータをProviderのルールに従って指定
  return (
    <AuthContext.Provider value={user}>
         {/* AuthProvider以下のコンポーネントを描写する処理 */}
        { children }
    </AuthContext.Provider>
  )
}

export {
  AuthContext,
  AuthProvider
}