import './App.css'
import Navbar from './components/Navbar'
import SliderSelect from './components/SliderSelect'
import Result from "./components/Result";

function App() {
  return (
    <div className='app'>
      <Navbar />
      <SliderSelect />
      <Result />
    </div>
  )
}

export default App
