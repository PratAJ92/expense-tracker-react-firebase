import React from 'react'

export const useGetUserInfo = () => {
    const userInfo = localStorage.getItem('auth')
    const { userId, name, profilePhoto, isAuth } = JSON.parse(userInfo)

    return { userId, name, profilePhoto, isAuth }
}