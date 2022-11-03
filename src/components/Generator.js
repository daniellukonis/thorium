import { useState } from 'react'
import { escapeRegExp } from '../helpers'

function Includes ({ setRegexp }) {

  function handleChange (evt) {
    setRegexp(new RegExp(escapeRegExp(evt.target.value), 'g') || null)
  }

  return (
    <div className="generator-component">
      <label>Includes: </label>
      <input onChange={ handleChange }></input>
    </div>
  )
}

function Between ({ setRegexp }) {

  const FROM_VALUE = null;
  const TO_VALUE = null;

  const [fromValue, setFromValue] = useState(FROM_VALUE)
  const [toValue, setToValue] = useState(TO_VALUE)

  function handleFromChange (evt) {
    setFromValue(evt.target.value)
    setRegexp(`[${evt.target.value || null}-${toValue}]`)
  }


  function handleToChange (evt) {
    setToValue(evt.target.value)
    setRegexp(`[${fromValue}-${evt.target.value || null}]`)
  }


  return (
    <div className="generator-component">
      <label>Between: </label>
      <input onChange={handleFromChange} maxLength='1'></input>
      <span><p>AND</p></span>
      <input onChange={handleToChange} maxLength='1'></input>
    </div>
  )
}

function ExpressionGenerator ({ setRegexp }) {

  return (
    <div className="regexp-component">
      <label className="label">ExpressionGenerator</label>
      <div className="input">
        < Includes setRegexp = { setRegexp } />
        < Between setRegexp = { setRegexp } />
      </div>

    </div>
  )
}

export { ExpressionGenerator }
