import { Link, NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    John Doe
                </Link>
                
                <div className="navbar-nav mr-auto">
                    <NavLink className="nav-link" to="/">
                        Home
                    </NavLink>
                    <NavLink className="nav-link" to="/about">
                        About
                    </NavLink>
                    <NavLink className="nav-link" to="/contact">
                        Contact
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Menu;
