import { useRef, useState } from 'react'

import Header from './components/Header.jsx'
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';
import Menu from './components/Menu.jsx';

import './styles/styles.scss';

function App() {
  
  const [menuShown, setMenuShown] = useState(false);

  const showMenu = () => {
    setMenuShown(true);
  }
  return (
    <div className='content'>
      <Header showMenu={showMenu} />
      <Main />
      <Footer />
      { menuShown &&
      <Menu />
      }
    </div>
  )
}

export default App;
