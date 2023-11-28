import { useRef } from 'react';

function Menu() {
    return (
        <div className='menu'>
            <div className="menuContent">
                <div className="closeMenu">X</div>
                <div className="aboutSection section">
                    <p>Informații</p>
                </div>
                <div className="chatSection section">
                    <p>Frequently Asked Questions</p>
                </div>
                <div className="formSection section">
                    <p>Formular</p>
                </div>
            </div>
        </div>
    );
}

export default Menu;