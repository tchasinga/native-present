import './index.css'
import Apispages from './Pages/Apispages.jsx'
import List from './Pages/List.jsx'
import Navbars from './Pages/Navbars'
import Policy from './Pages/Policy.jsx'
import Program from './Pages/Program.jsx'
import Welcom from './Pages/Welcom.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className='mx-auto max-w-7xl w-full'>
      <BrowserRouter>
        <Navbars />
        <Routes>
          <Route path='/' element={<><Welcom /><Program/></>} />
          <Route path='/apipages' element={<Apispages/>} />
          <Route path='/policy'  element={<Policy/>}/>
          <Route path='/thelist' element={<List />}/>
        </Routes>  
      </BrowserRouter>
    </div>
  )
}

export default App