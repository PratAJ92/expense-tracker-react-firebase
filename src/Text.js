import React from 'react'
import { useState, useEffect } from 'react'

const Text = () => {

  const [text, setText] = useState('');

  useEffect(() => {
    console.log('Component mounted')
    console.log('Component updated')

    return () => {
      console.log('Component unmounted')
    }

  }, [text])

  return (
    <div>
      <input 
          type='text' 
          placeholder='Enter text here' 
          onChange={(event) => {
            setText(event.target.value)
          }}
      />
      <h1>{text}</h1>
    </div>
  )
}

export default Text