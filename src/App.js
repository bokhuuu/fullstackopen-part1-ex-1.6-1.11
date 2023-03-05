import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const StisticLine = (props) => {
  return (
    <p>{props.text} {props.statistic}</p>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = (good + neutral + bad)
  const average = (good + neutral + bad) / 3
  const positive = good / (good + neutral + bad) * 100

  const handleClickGood = () => setGood(good + 1)
  const handleClickNeutral = () => setNeutral(neutral + 1)
  const handleClickBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleClickGood} text="good" />
      <Button handleClick={handleClickNeutral} text="neutral" />
      <Button handleClick={handleClickBad} text="bad" />
      <h1>statistis</h1>
      <StisticLine text="good" statistic={good} />
      <StisticLine text="neutral" statistic={neutral} />
      <StisticLine text="bad" statistic={bad} />
      <StisticLine text="all" statistic={all} />
      <StisticLine text="average" statistic={average} />
      <StisticLine text="positive" statistic={positive} />
      <StisticLine statistic={all == 0 ? "no feedback given" : null} />
    </div>
  )
}

export default App
