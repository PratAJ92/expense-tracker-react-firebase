import Axios from 'axios'
import React from 'react'
import { useLoaderData, useNavigation } from 'react-router-dom'

export const About = () => {

  const url = useLoaderData()
  const navigation = useNavigation()

  if(navigation.state === 'loading') {
    return <h1>Loading...</h1>
  }
  return (
    <div>
      <h1>This is about page</h1>
      <img src={url}></img>
    </div>
  )
}

export const dataLoader = async () => {
  const url = await Axios.get('https://random.dog/woof.json')
    .then((res) => {
        console.log(res.data)
        return res.data.url
    })

  return url;
}
