import { useEffect, useState } from 'react'
import { Text, RegExpress, RawResult, VisualResult, ExpressionGenerator } from './index'

function Main () {

// constants
  const TEXT_PLACEHOLDER = 'What do you call a couple of chimpanzees sharing an Amazon account? PRIME-mates'
  const REGEXP_PLACEHOLDER = /a/g

// set state
  const [text, setText] = useState(TEXT_PLACEHOLDER)
  const [regexp, setRegexp] = useState(REGEXP_PLACEHOLDER)

// use effect hook
// useEffect(() => {console.log(regexp)})

// render
  return (
    <div className='main'>

      <div>
        <Text text={ text } setText={ setText }/>
      </div>

      <div>
        <ExpressionGenerator regexp={ regexp } setRegexp={ setRegexp }/>
      </div>

      <div>
        <RegExpress regexp={ regexp } />
      </div>

      <div>
        <RawResult text={ text } regexp={ regexp }/>
      </div>

      <div>
        <VisualResult text={ text } regexp={ regexp }/>
      </div>

    </div>
  )
}

export default Main
