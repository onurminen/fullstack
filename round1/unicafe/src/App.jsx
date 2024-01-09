import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  const sum = () => { return (good + neutral + bad) }

  const avg = () => {
    const total = good + neutral + bad
    if (total === 0) {
      return 0
    }
    else {
      return ((good - bad) / total)
    }
  }

  const positive = () => {
    if ((good + neutral + bad) === 0) {
      return 0
    }
    else {
      return (good / (good + neutral + bad)) * 100
    }
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text="good"></Button>
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {sum()}</p>
      <p>average {avg()}</p>
      <p>positive {positive()}%</p>
    </div>
  )
}

export default App