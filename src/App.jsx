import {  } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'


function App() {

  return (
    <>
     <HashRouter>
       <Routes>
         <Route element={<Home/>} path='/'/>
       </Routes>
     </HashRouter>
    </>
  )
}

export default App
