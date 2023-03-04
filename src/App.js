import { useState } from 'react'

const StatisticsOfOptionGood = (props) => {
  return (
    <p>good {props.optionGood}</p>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClickGood} />
  )
}

const StatisticsOfOptionNeutral = (props) => {
  return (
    <p>neutral {props.optionNeutral}</p>
  )
}

const StatisticsOfOptionBad = (props) => {
  return (
    <p>bad {props.optionBad}</p>
  )
}

const StatisticsAll = (props) => {
  return (
    <p>all {props.all}</p>
  )
}

const StatisticsAverage = (props) => {
  return (
    <p>average {props.average}</p>
  )
}

const StatisticsPositive = (props) => {
  return (
    <p>positive {props.positive}</p>
  )
}

const NoFeedback = (props) => {
  return (
    <div>
      {props.all == 0 ? <p>no feedack given</p> : null}
    </div>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = (good + neutral + bad)
  const average = (good + neutral + bad) / 3
  const positive = good / (good + neutral + bad) * 100

  const handleClickGood = () => {
    return setGood(good + 1)
  }

  const handleClickNeutral = () => {
    return setNeutral(neutral + 1)
  }

  const handleClickBad = () => {
    return setBad(bad + 1)
  }
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleClickGood}>good</button>
      <button onClick={handleClickNeutral}>neutral</button>
      <button onClick={handleClickBad}>bad</button>
      <h1>statistics</h1>
      <StatisticsOfOptionGood optionGood={good} />
      <StatisticsOfOptionNeutral optionNeutral={neutral} />
      <StatisticsOfOptionBad optionBad={bad} />
      <StatisticsAll all={all} />
      <StatisticsAverage average={average} />
      <StatisticsPositive positive={positive} />
      <NoFeedback all={all} />
    </div>
  )
}

export default App
