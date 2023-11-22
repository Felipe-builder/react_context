import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

const Home = () => {
  const {counter} = useContext(CounterContext)

  return (
    <div>
      <h1>Home</h1>
      <span>Valor do contador: {counter}</span>
    </ div>
  )
}

export default Home