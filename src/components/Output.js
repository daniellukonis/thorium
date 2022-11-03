
import { textMatchAll } from "../helpers"

function RegExpress ({ regexp }) {

  return (
    <div className="regexp-component">
      <label className="label">Regular Expression</label>
      <input placeholder={ new RegExp(regexp) + 'g' } className='input' disabled></input>
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

  const spreadText = [...text]
  const matched = textMatchAll(text, regexp)
  matched.forEach(e => {
    for(let i = e.index; i < e.index + e[0].length; i++){
      spreadText[i] = <span key={e.index} className="aqua-hightlight">{spreadText[i]}</span>
    }
  })
  // spreadText = <p>{spreadText}</p>

  // console.log(text)

  return (
    <div className="regexp-component">
      <label className="label">Visual Result</label>
      {/* <p>{spreadText}</p> */}
    </div>
  )
}

export { RawResult, VisualResult, RegExpress }
