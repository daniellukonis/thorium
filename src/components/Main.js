import { useEffect, useState} from 'react'
import { Text, RegExpress, RawResult, VisualResult, ExpressionGenerator } from './index'

function Main () {

  function textMatchAll (text, regexp) {
    return [...text.matchAll(new RegExp(regexp, 'g'))]
  }

// constants
  const TEXT_PLACEHOLDER = 'What do you call a couple of chimpanzees sharing an Amazon account? PRIME-mates'
  const REGEXP_PLACEHOLDER = /a/
  const RAWRESULT_PLACEHOLDER = 'a'
  const VISUALRESULT_PLACEHOLDER = 'a'

// set state
  const [text, setText] = useState(TEXT_PLACEHOLDER)
  const [regexp, setRegexp] = useState(REGEXP_PLACEHOLDER)
  const [rawResult, setRawResult] = useState(RAWRESULT_PLACEHOLDER)
  const [visualResult, setVisualResult] = useState(VISUALRESULT_PLACEHOLDER)

// use effect hook
  useEffect(() => {
    const a = new RegExp(regexp)
    const b = textMatchAll(text, a)
    console.log(regexp, b)
  })

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
        <RegExpress regexp={ regexp } setRegexp={ setRegexp }/>
      </div>

      <div>
        <RawResult rawResult={ rawResult } setRawResult={ setRawResult } />
      </div>

      <div>
        <VisualResult visualResult={ visualResult } setVisualResult={ setVisualResult } />
      </div>

    </div>
  )
}

export default Main
