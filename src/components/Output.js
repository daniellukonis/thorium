
import { textMatchAll } from "../helpers"

function RegExpress ({ regexp }) {

  function copyText (evt) {
    navigator.clipboard.writeText(evt.target.value)
  }

  return (
    <div className="regexp-component" onClick={copyText}>
      <label className="label">Regular Expression </label>
      <input className='input' disabled value={regexp} onClick={copyText}></input><sub className="float">click text to copy</sub>
    </div>
  )
}

function RawResult ({ text, regexp }) {

  return (
    <div className="regexp-component">
      <label className="label">Raw Result</label>
      <textarea className='input' rows='5' placeholder={
        textMatchAll(text, regexp)
          } disabled></textarea>
    </div>
  )
}

function VisualResult ({ text, regexp }) {
  const targets = []
  const splits = [...text]

  const matched = textMatchAll(text, regexp)

  matched.forEach(e => {
    for(let i = e.index; i < e.index + e[0].length; i++){
      targets.push(i)
    }
  })

  return (
    <div className="regexp-component">
      <label className="label">Visual Result</label>
      <p className="input result">
        {splits.map((e, i) => {
          if(targets.includes(i)) {
            return <span key={i} className="aqua-hightlight">{e}</span>
          } else {
            return <span key={i}>{e}</span>
          }

        })}
      </p>
    </div>
  )
}

export { RawResult, VisualResult, RegExpress }
