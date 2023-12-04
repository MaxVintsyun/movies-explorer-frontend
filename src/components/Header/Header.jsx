import { useLocation, Link, NavLink } from 'react-router-dom';
import { hiddenRoutes } from '../../utils/constants';

function Header({ isAuth }) {
    const location = useLocation();

    return (
        !hiddenRoutes.includes(location.pathname) && (
            <header className='header'>
                <Link to='/' className='header__logo' />
                {isAuth ? (
                    <>
                        <div className='header__menu'>
                            <NavLink to="/movies" className={({ isActive }) => `header__link ${isActive ? "header__link_active" : ""}`}>Фильмы</NavLink>
                            <NavLink to="/saved-movies" className={({ isActive }) => `header__link ${isActive ? "header__link_active" : ""}`}>Сохранённые фильмы</NavLink>
                        </div>
                        <Link to='/profile' className='header__profile'>Аккаунт</Link>
                    </>
                ) : (
                    <div className='header__authentication'>
                        <Link to='/signup' className='header__register'>Регистрация</Link>
                        <Link to='/signin' className='header__auth'>Войти</Link>
                    </div>
                )
                }
            </header>
        )
    );
}

export default Header;