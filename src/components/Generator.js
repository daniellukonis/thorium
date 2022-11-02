

function Includes () {
  return (
    <div className="generator-component">
      <label>Includes: </label>
      <input placeholder="a"></input>
      <Add />
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
      <Add />
    </div>
  )
}

function Add () {
  return (
    <div>
      <button>Add</button>
    </div>
  )
}


function ExpressionGenerator () {

  return (
    <div className="regexp-component">
      <label className="label">ExpressionGenerator</label>
      <div className="input">
        < Includes />
        < Between />
      </div>

    </div>
  )
}

export { ExpressionGenerator }
