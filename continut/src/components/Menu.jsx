import { useRef } from 'react';

function Menu() {
    return (
        <div className='menu'>
            <div className="menuContent">
                
                <div className="aboutSection section">
                    <p><a href="info">Informații</a></p>
                </div>
                <div className="chatSection section">
                    <p><a href='faq'>Frequently Asked Questions</a></p>
                </div>
                <div className="formSection section">
                    <p><a href='form'>Formular</a></p>
                </div>
            </div>
        </div>
    );
}

export default Menu;