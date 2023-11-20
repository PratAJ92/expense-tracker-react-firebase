import React from 'react'
import { auth, provider } from '../../config/firebase-config'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export const Auth = () => {

  let navigate = useNavigate()

  const signInUser = async () => {
    const result = await signInWithPopup(auth, provider)
    console.log(result)
    const authInfo = {
      userId: result.user.uid,
      name: result.user.displayName,
      profilePhoto: result.user.photoURL,
      isAuth: true
    }
    localStorage.setItem('auth', JSON.stringify(authInfo))
    navigate('/app')
    
  }

  return (
    <>
      <div>Auth - Google Sign In Page</div>
      <button onClick={signInUser}>Sign in with Google</button>
    </>
  )
}