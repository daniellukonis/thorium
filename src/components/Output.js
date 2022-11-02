
function RawResult ({ rawResult, setRawResult }) {

  const H = `className='highlighted'`

  return (
    <div className="regexp-component">
      <label className="label">Raw Result</label>
      <textarea className='input' rows='5' placeholder={rawResult} disabled></textarea>
    </div>
  )
}

function VisualResult ({ visualResult, setVisualResult }) {

  const H = `className='highlighted'`

  return (
    <div className="regexp-component">
      <label className="label">Visual Result</label>
      <textarea className='input' rows='5' placeholder={visualResult} disabled></textarea>
    </div>
  )
}

export { RawResult, VisualResult }
