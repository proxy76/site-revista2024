import { useRef, useState, useEffect } from 'react'

import Header from './components/Header.jsx'
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';

import './styles/styles.scss';

function App() {
  
  const contributeRef = useRef(null);

  function takeToContribute() {
    console.log(contributeRef);
    contributeRef.current.scrollIntoView();
  }

  return (
    <div className='content'>
      <Header />
      <Main ref={contributeRef} takeToContribute={takeToContribute} />
      <Footer />
    </div>
  )
}

export default App;
