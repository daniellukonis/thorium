

function Text ({ text, setText }) {

  function handleChange (evt) {
    setText(evt.target.value)
  }

  return (
    <div className="regexp-component">
      <label className="label">Input Text</label>
      <textarea rows='5' placeholder={ text } className='input' onChange={handleChange}></textarea>
    </div>
  )
}

function RegExpress ({ regexp, setRegexp }) {

  function handleChange (evt) {
    setRegexp(evt.target.value)
  }

  return (
    <div className="regexp-component">
      <label className="label">Regular Expression</label>
      <input placeholder={ regexp } className='input' onChange={ handleChange }></input>
    </div>
  )
}

export { Text, RegExpress }
