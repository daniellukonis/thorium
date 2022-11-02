import { textMatchAll, normalizeRegExp } from "../helpers"

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

export { Text }
