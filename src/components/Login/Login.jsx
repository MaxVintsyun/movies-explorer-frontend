import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FormInput from "../FormInput/FormInput";
import { isValidEmail } from "../../utils/validationConfig";

function Login({ onLogin }) {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);

    const handleLogin = (value) => {
        setLogin(value);
    }

    const handlePassword = (value) => {
        setPassword(value);
    }

    useEffect(() => {
        (login && password) ? setIsDisabled(false) : setIsDisabled(true);
    }, [login, password])

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onLogin(login, password);
    }

    return (
        <div className="sign">
            <Link to='/' className="sign__logo" />
            <h2 className="sign__title">Рады видеть!</h2>
            <form className="sign__form" id="login-form-container" name="login-form" onSubmit={handleSubmit} noValidate>
                <FormInput
                    className='sign'
                    htmlFor='email'
                    id='login-email-input'
                    name='email'
                    type='email'
                    placeholder='Email'
                    handleValue={handleLogin}
                    checkValue={isValidEmail}
                />
                <FormInput
                    className='sign'
                    htmlFor='password'
                    id='login-password-input'
                    name='password'
                    type='password'
                    placeholder='Пароль'
                    handleValue={handlePassword}
                />
                <button disabled={isDisabled} type="submit" className={`sign__submit ${isDisabled ? 'sign__submit_disabled' : ''}`}>Войти</button>
            </form>
            <p className="sign__question">Ещё не зарегистрированы? <Link to="/signup" className="sign__redirect">Регистрация</Link></p>
        </div>
    );
}

export default Login;