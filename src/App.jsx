
import './App.css'
import Comp1 from './components/Comp1'

function App() {
  const user = {
    name : "Priyanshu",
    age:34,
    gender : "Male",
  }
  
  return (
    <>
      <Comp1 detail = {user} />
    </>
  )
}

export default App
