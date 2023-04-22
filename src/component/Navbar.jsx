import { Link } from "react-router-dom";
import '../App.css';
const Navbar = () => {
    return (
       <>
            <div className="header">
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/add'>Add</Link>
                    </li>
                    <li>
                        <Link to='/view'>View</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </div>
       </>
    )
}

export default Navbar;