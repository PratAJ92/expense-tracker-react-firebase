import React from 'react'
import {signInWithPopup} from 'firebase/auth'
import {auth, provider} from '../../config/firestore-config'
import {useNavigate, Navigate} from 'react-router-dom'
import {useGetUserInfo} from '../../hooks/useGetUserInfo'

export const Login = () => {

  const navigate = useNavigate()
  const {isAuthenticated} = useGetUserInfo()

  const googleSignIn = async () => {
    const result = await signInWithPopup(auth, provider)
    console.log(result)
    const userInfo = {
        userID: result.user.uid,
        displayName: result.user.displayName,
        photoURL: result.user.photoURL,
        isAuthenticated: true
    }
    localStorage.setItem('AUTH', JSON.stringify(userInfo))
    navigate('/app')
  }

  if(isAuthenticated) {
    return <Navigate to='/app'/>
  }

  return (
    <div>
      <h3>Please sign in with Google</h3>
      <button onClick={googleSignIn}>Google Login</button>
    </div>
  )
}