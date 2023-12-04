import { useLocation, Link } from 'react-router-dom';
import { hiddenRoutes } from '../../utils/constants';

function Header() {
    const location = useLocation();

    return(
        !hiddenRoutes.includes(location.pathname) && (
        <header className='header'>
            <Link to='/' className='header__logo' />
            <div className='header__authentication'>
                <Link to='/signup' className='header__register'>Регистрация</Link>
                <Link to='/signin' className='header__auth'>Войти</Link>
            </div>
        </header>
        )
    );
}

export default Header;