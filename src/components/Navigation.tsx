import {Link} from "react-router-dom"
import {FiHome, FiPlus} from "react-icons/fi"

export default function Navigation() {
    return (
        <nav className="navigation">
            <ul>
                <li><Link to='/'><FiHome/></Link></li>
                <li><Link to='/add'><FiPlus/></Link></li>
            </ul>
        </nav>
    )
}