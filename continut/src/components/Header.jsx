import { GiHamburgerMenu } from "react-icons/gi";


function Header({showMenu}) {
    return (
        <div className='header'>
            <div className="icon">
            </div>
            <span className='title'>Perspective</span>
            <GiHamburgerMenu onClick={showMenu} className="hamburger" size={30} />
        </div>
    )
};

export default Header;
