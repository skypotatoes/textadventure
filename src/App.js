import Output from './Output'
import Input from './Input'
import { useState } from 'react'

function App() {
  const [text, setText] = useState('')
  const [submitted, setSubmitted] = useState(``)

  const [hasSubmitted, setHasSubmitted] = useState(false)

  return (
    <>
      <Output
        text={text}
        setText={setText}
        submitted={submitted}
        setSubmitted={setSubmitted}
        hasSubmitted={hasSubmitted}
        setHasSubmitted={setHasSubmitted}
      />
      <Input
        text={text}
        setText={setText}
        submitted={submitted}
        setSubmitted={setSubmitted}
        hasSubmitted={hasSubmitted}
        setHasSubmitted={setHasSubmitted}
      />
    </>
  )
}

export default App
