import {Link} from "react-router-dom"
import {FiHome, FiLogOut, FiPlusCircle} from "react-icons/fi"
import {LocaleConsumer} from "../contexts/LocaleContext.ts";

export default function Navigation({logout, name}: {logout: () => void, name: string}) {
    return (
        <LocaleConsumer>
            {
                ({locale, toggleLocale}: {locale: string, toggleLocale: () => void}) => {
                    return (
                        <nav className="navigation">
                            <ul>
                                <li><button onClick={toggleLocale}>{locale === 'id' ? 'en' : 'id'}</button></li>
                                <li><Link to='/'><FiHome/></Link></li>
                                <li><Link to='/add'><FiPlusCircle/></Link></li>
                                <li><button onClick={logout}>{name}<FiLogOut/></button></li>
                            </ul>
                        </nav>
                        )
                }
            }
        </LocaleConsumer>
    )
}