import {Link} from "react-router-dom"
import {FiHome, FiLogOut, FiPlusCircle} from "react-icons/fi"

export default function Navigation({logout, name}: {logout: () => void, name: string}) {
    return (
        <nav className="navigation">
            <ul>
                <li><Link to='/'><FiHome/></Link></li>
                <li><Link to='/add'><FiPlusCircle/></Link></li>
                <li><button onClick={logout}>{name}<FiLogOut/></button></li>
            </ul>
        </nav>
    )
}