import './index.css'
import Navbars from './Pages/Navbars'
import Program from './Pages/Program'
import Welcom from './Pages/Welcom'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className='mx-auto max-w-7xl w-full'>
      <BrowserRouter>
        <Navbars />
        <Routes>
          <Route path='/' element={<><Welcom /><Program/></>} />
          <Route path='/apipages' element={<div>PAGE NOT FOUND</div>} />
        </Routes>  
      </BrowserRouter>
    </div>
  )
}

export default App