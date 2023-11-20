import React from 'react'
import {Navigate} from 'react-router-dom'
export const useGetUserInfo = () => {
    if(localStorage.getItem('AUTH') === null)
        return (<Navigate to='/' />);
    const userInfo = JSON.parse(localStorage.getItem('AUTH'))
    const {userID, displayName, photoURL, isAuthenticated} = userInfo

    return {userID, displayName, photoURL, isAuthenticated}
}
