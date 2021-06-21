import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false)
  //getting string value from rgb array
  const bcg = rgb.join(',')
  // getting hex value from rgb array
  const colorValue = rgbToHex(...rgb)

  // hiding copied to clipboard
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000)
    return () => clearTimeout(timeout)
  }, [alert])

  return (
    <article
      className={`color ${index > 15 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(colorValue)
      }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{colorValue}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
