import { GiHamburgerMenu } from "react-icons/gi";


function Header() {



    return (
        <div className='header'>
            <div className="icon">
            </div>
            <span className='title'>Perspective</span>
            <GiHamburgerMenu className="hamburger" size={30} />
        </div>
    )
}

export default Header;