import React from 'react'

export default function Input({
  text,
  setText,
  submitted,
  setSubmitted,
  hasSubmitted,
  setHasSubmitted,
}) {
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(text)
    setText('')
    setHasSubmitted(true)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
