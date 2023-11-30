import { forwardRef } from 'react';

import About from './About.jsx';
import Chat from './Chat.jsx';
import Intro from './Intro.jsx'
import Form from './Form.jsx';

const Main = forwardRef(({takeToContribute}, contributeRef) => {
    return (
        <div className='main'>
            <Intro takeToContribute={takeToContribute}/>
            <About />
            <Chat />
            <Form ref={contributeRef}/>
        </div>
    )
});

export default Main;