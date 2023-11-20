import Axios from 'axios'
import React from 'react'
import { useState } from 'react'

const Excuser = () => {

  const [excuse, setExcuse] = useState()
  const [excuseCategory, setExcuseCategory] = useState()

  const generateExcuse = (event) => {
    let buttonName = event.target.name
    console.log(`https://excuser-three.vercel.app/v1/excuse/${buttonName}`)
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${buttonName}`)
        .then((res) => {
            console.log(res.data)
            setExcuse(res.data[0].excuse)
            setExcuseCategory(res.data[0].category)
        })
  }

  return (
    <div>
      <h1>Generate and excuse</h1>
      <button name='party' onClick={(event) => generateExcuse(event)}>Party</button>
      <button name='family' onClick={(event) => generateExcuse(event)}>Family</button>
      <button name='office' onClick={(event) => generateExcuse(event)}>Office</button>

      <h5>Excuse: {excuse}</h5>
      <h4>Category: {excuseCategory}</h4>
    </div>
  )
}

export default Excuser