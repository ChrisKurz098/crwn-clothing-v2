import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import './navigation.styles.scss';

const NavigationBar = () => {
    const {currentUser} = useContext(UserContext)

    console.log(currentUser)
    return (
        <>
            <nav className="navigation">
                <Link className='logo-container' to='/'>
                    <CrownLogo />
                </Link>

                <div className="nav-links-container">
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    <Link className='nav-link' to='/contact'>
                        CONTACT
                    </Link>
                    <Link className='nav-link' to='/signin'>
                        SIGN IN
                    </Link>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                </div>
            </nav>

            <Outlet />
        </>
    )
}

export default NavigationBar;
