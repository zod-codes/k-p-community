import { Link } from "react-router-dom";
import data from "../JSON data/data.json";

const handleClick = (e) => {
    let currentSelected = e.target;
    let array = e.currentTarget.children;
    if (e.target !== e.currentTarget) {
        for (const item of array) {
            if (item !== currentSelected) {
                item.classList.remove("active");
            } else {
                currentSelected.classList.add("active");
            };
        };
    };
    e.stopPropagation();
};

const Navbar = () => {
    let logo = data.icons[0].images.logo;
    return (
        <nav className="nav h5-sh2-nav-text-fnt grid">
            <img src={logo} className="logo" alt="logo" />

            <hr />

            <span onClick={handleClick} onClickCapture={() => false} className="flex">
                <Link to="/" className="first link white" data-one> <strong>00</strong> HOME</Link>
                <Link to="/destination" className="link white" data-two><strong>01</strong> DESTINATION</Link>
                <Link to="/crew" className="link white" data-three><strong>02</strong> CREW</Link>
                <Link to="/tech" className="link white" data-four><strong>03</strong> TECHNOLOGY</Link>
            </span>
        </nav>
    );
}

export default Navbar;