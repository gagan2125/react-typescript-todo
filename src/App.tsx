import AddTodo from './components/AddTodo'
import Navbar from './components/Navbar'
import ToDos from './components/ToDos'
import "./App.css";

const App = () => {
  return (
    <main>
      <h1>TODO REACT + TYPESCRIPT</h1>
      <Navbar/>
      <AddTodo/>
      <ToDos />
    </main>
  )
}

export default App
