

function Includes ({ setRegexp }) {

  function handleChange (evt) {
    setRegexp(evt.target.value)
  }

  return (
    <div className="generator-component">
      <label>Includes: </label>
      <input onChange={ handleChange }></input>
    </div>
  )
}

function Between () {
  return (
    <div className="generator-component">
      <label>Between: </label>
      <input></input>
      <span><p>AND</p></span>
      <input></input>
    </div>
  )
}

function ExpressionGenerator ({ setRegexp }) {

  return (
    <div className="regexp-component">
      <label className="label">ExpressionGenerator</label>
      <div className="input">
        < Includes setRegexp = { setRegexp } />
        {/* < Between /> */}
      </div>

    </div>
  )
}

export { ExpressionGenerator }
