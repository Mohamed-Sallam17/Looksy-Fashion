import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './components/Home'
import Shop from './components/Shop'
import About from './components/About'

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
        </Route>
        <Route path='/shop' element={<Shop/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </div>
  )
}

export default App
