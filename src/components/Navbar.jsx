import {Link} from "react-router";

function Navbar() {
    return (
        <nav className="navcustom">
            <div className="link">

                <Link to="/" className="nav-link">Home</Link>
                <Link to="/info" className="nav-link">Info</Link>

            </div>
        </nav>
    )
}
export default Navbar;