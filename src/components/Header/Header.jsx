import React from 'react';
import logo from '../../images/header-logo.svg';

function Header() {
    return(
        <header className='header'>
            <img className='header__logo' src={logo} alt='Лого'/>
            <div className='header__authentication'>
                <div className='header__register'>Регистрация</div>
                <div className='header__auth'>Войти</div>
            </div>
        </header>
    );
}

export default Header;