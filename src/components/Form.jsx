import { forwardRef } from 'react';
//import Image from '../assets/poster.png';

const Form = forwardRef((props, contributeRef) => {
    return (
        <div ref={contributeRef} className="form">
            <p className='above-h1'>În decembrie 2001,  câțiva elevi din CNNG au redactat primul număr al revistei <b>Perspective</b>. În 2024 va apărea numărul 27. </p>
            <h1>Contribuie și tu!</h1>
            <img className='reviste' src="./reviste2.png" alt="" />
            <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfLUDItFhY5fyq2h_SMcCyNWoSYeD_e-F7plOTpWeF0d0f4Aw/viewform">Mergi către formular</a>
        </div>
    );
})

export default Form;