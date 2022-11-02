
import { textMatchAll } from "../helpers"


function RegExpress ({ regexp }) {

  return (
    <div className="regexp-component">
      <label className="label">Regular Expression</label>
      <input placeholder={ regexp } className='input' disabled></input>
    </div>
  )
}

function RawResult ({ text, regexp }) {

  return (
    <div className="regexp-component">
      <label className="label">Raw Result</label>
      <textarea className='input' rows='5' placeholder={ textMatchAll(text, regexp).map(e => e[0]).join() } disabled></textarea>
    </div>
  )
}

function VisualResult ({ text, regexp }) {

  return (
    <div className="regexp-component">
      <label className="label">Visual Result</label>
      <textarea className='input' rows='5' placeholder={ text } disabled></textarea>
    </div>
  )
}

export { RawResult, VisualResult, RegExpress }
