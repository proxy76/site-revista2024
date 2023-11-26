import { useState } from 'react'

import Header from './components/Header.jsx'
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';

import './styles/styles.scss';

function App() {

  return (
    <div className='content'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App;
