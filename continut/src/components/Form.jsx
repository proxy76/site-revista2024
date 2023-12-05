import { forwardRef } from 'react';
import Image from '../assets/poster.png';

const Form = forwardRef((props, contributeRef) => {
    return (
        <div ref={contributeRef} className="form">
            <h1>Contribuie și tu!</h1>
            <img src={Image} alt="" />
            <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfLUDItFhY5fyq2h_SMcCyNWoSYeD_e-F7plOTpWeF0d0f4Aw/viewform">Mergi către formular</a>
        </div>
    );
})

export default Form;