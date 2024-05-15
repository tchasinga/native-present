import './index.css'
import Navbars from './Pages/Navbars'
import Program from './Pages/Program'
import Welcom from './Pages/Welcom'


function App() {

  return (
    <div className='mx-auto max-w-7xl w-full'>
      <Navbars />
      <Welcom />
      <Program />
    </div>
  )
}

export default App
