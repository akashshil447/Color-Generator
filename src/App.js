import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [noOfShades, setNoOfShades] = useState(10)
  const [list, setList] = useState(new Values('#ff0000').all(noOfShades))

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let noOfColorShades = 10
      // using Values.js library to create a color shade and tint
      if (noOfShades == '5') {
        noOfColorShades = 20
      }
      if (noOfShades == '10') {
        noOfColorShades = 10
      }
      if (noOfShades == '20') {
        noOfColorShades = 5
      }
      if (noOfShades == '50') {
        noOfColorShades = 2
      }
      if (noOfShades == '100') {
        noOfColorShades = 1
      }
      const newColor = new Values(color).all(noOfColorShades)
      setList(newColor)
      setError(false)
    } catch (error) {
      console.log(error)
      setError(true)
    }
  }
  return (
    <>
      <section className='container'>
        <h3>Color generator:</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            className={`${error ? 'error' : null}`}
            placeholder='#ff0000'
            value={color}
            onChange={(e) => {
              setColor(e.target.value)
            }}
          />
          <label htmlFor='noOfShades' className=''>
            No of Shades:{' '}
          </label>

          <select
            name='noOfShades'
            onChange={(e) => {
              setNoOfShades(Number(e.target.value))
            }}
          >
            <option value='5'>5</option>
            <option value='10'>10</option>
            <option value='20'>20</option>
            <option value='50'>50</option>
            <option value='100'>100</option>
          </select>

          <button type='submit' className='btn'>
            generate
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              index={index}
              {...color}
              noOfShades={noOfShades}
            />
          )
        })}
      </section>
    </>
  )
}

export default App
