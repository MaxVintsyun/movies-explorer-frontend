import { Link, NavLink } from "react-router-dom";

function Navigation({ isOpenNav, closeNav }) {
    return (
        <div className={`navigation ${isOpenNav ? "navigation_active" : ""}`}>
            <div className="navigation__container">
                <nav className="navigation__nav">
                    <NavLink to="/" className={({ isActive }) => `navigation__link ${isActive ? "navigation__link_active" : ""}`} onClick={closeNav}>Главная</NavLink>
                    <NavLink to="/movies" className={({ isActive }) => `navigation__link ${isActive ? "navigation__link_active" : ""}`} onClick={closeNav}>Фильмы</NavLink>
                    <NavLink to="/saved-movies" className={({ isActive }) => `navigation__link ${isActive ? "navigation__link_active" : ""}`} onClick={closeNav}>Сохранённые фильмы</NavLink>
                </nav>
                <Link to='/profile' className='navigation__profile' onClick={closeNav}>Аккаунт</Link>
            </div>
            <button className="navigation__close" onClick={closeNav} />
        </div>
    );
}

export default Navigation;