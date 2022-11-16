import React from 'react'

const helpText = 'Help text appears here'
// const welcomeText = ""

export default function Output({ submitted, hasSubmitted, setHasSubmitted }) {
  const command = submitted
  const tokens = command.split(' ')
  if (hasSubmitted === false) {
    return <div className="output">"Welcome to the Text Adventure"</div>
  }

  if (hasSubmitted === true) {
    if (tokens.includes('help')) {
      return <div className="output">{helpText}</div>
    }

    return <div className="output">"I didn't understand that"</div>
  }
}
