import About from './About.jsx';
import Chat from './Chat.jsx';
import Intro from './Intro.jsx'
import Form from './Form.jsx';

function Main() {
    return (
        <div className='main'>
            <Intro />
            <About />
            <Chat />
            <Form />
        </div>
    )

}

export default Main;