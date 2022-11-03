
import { textMatchAll } from "../helpers"

function RegExpress ({ regexp }) {

  return (
    <div className="regexp-component">
      <label className="label">Regular Expression</label>
      <input className='input' disabled value={regexp}></input>
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
