import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"
import ChangeCounter from "../component/ChangeCounter"

const Home = () => {
  const {counter} = useContext(CounterContext)

  return (
    <div>
      <h1>Home</h1>
      <span>Valor do contador: {counter}</span>
      <ChangeCounter />
    </ div>
  )
}

export default Home