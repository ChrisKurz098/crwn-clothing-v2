import { Outlet, Link } from "react-router-dom";

const NavigationBar = () => {
    return (
        <>
            <nav className="navigation">
                <Link className='logo-container' to='/'>
                    <div>Logo</div>
                </Link>

                <div className="nav-links-container">
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
