import { useState } from 'react'

import Header from './components/Header.jsx'
import Intro from './components/Intro.jsx'

import './styles/styles.scss';

function App() {

  return (
    <div className='content'>
      <Header />
      <Intro />
    </div>
  )
}

export default App
