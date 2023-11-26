import { useState } from 'react'

import Header from './components/Header.jsx'
import Intro from './components/Intro.jsx'
import About from './components/About.jsx';


import './styles/styles.scss';

function App() {

  return (
    <div className='content'>
      <Header />
      <Intro />
      <About />

    </div>
  )
}

export default App
