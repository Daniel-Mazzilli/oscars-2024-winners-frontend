import Navbar from './components/Navbar'
import './App.css'

function App() {

  return (
    <div className='app'>
      {/* navbar */}
      <Navbar />

      {/* main */}
      <div className='winners'>
        All the winners
      </div>
    </div>
  )
}

export default App
