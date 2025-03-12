import React from 'react'
import './assets/styles/global.css'
import Layout from './components/Layout'
import Home from './pages/home'
import Detail from './pages/detail/detail'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/RootStore/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/RootStore/:slug' element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
