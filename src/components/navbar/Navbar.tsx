import {useState} from "react"
import {Link} from "react-router-dom";
import "./Navbar.css"
import BurgerIcon from "../../icons/BurgerIcon";
import CloseIcon from "../../icons/CloseIcon";

export default function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
        <nav className="navigation">
            <Link to="/" className="brand-name">Technical test</Link>
            <span
                className="hamburger"
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded)
                }}
            >
                    {!isNavExpanded ?
                        <BurgerIcon height={36} width={36} fillColor="#000"/>
                        : <CloseIcon height={36} width={36} fillColor="#000"/>}
            </span>
            <div
                className={
                    isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                }
            >
                <ul>
                    <li>
                        <Link to="/" onClick={() => setIsNavExpanded(false)}>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={() => setIsNavExpanded(false)}>About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}