import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FormInput from "../FormInput/FormInput";
import { isValidEmail, isValidName } from "../../utils/validationConfig";

function Register({ onRegister }) {
    const [name, setName] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);

    const handleName = (value) => {
        setName(value);
    }

    const handleLogin = (value) => {
        setLogin(value);
    }

    const handlePassword = (value) => {
        setPassword(value);
    }

    useEffect(() => {
        (name && login && password) ? setIsDisabled(false) : setIsDisabled(true);
    }, [login, password, name])

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onRegister(login, password, name);
    }

    return (
        <div className="sign">
            <Link to='/' className="sign__logo" />
            <h2 className="sign__title">Добро пожаловать!</h2>
            <form className="sign__form" id="register-form-container" name="register-form" onSubmit={handleSubmit}>
                <FormInput className='sign'
                    htmlFor='name'
                    id='register-name-input'
                    name='name'
                    type='text'
                    placeholder='Имя'
                    handleValue={handleName}
                    checkValue={isValidName}
                />
                <FormInput
                    className='sign'
                    htmlFor='email'
                    id='register-email-input'
                    name='email'
                    type='email'
                    placeholder='Email'
                    handleValue={handleLogin}
                    checkValue={isValidEmail}
                />
                <FormInput
                    className='sign'
                    htmlFor='password'
                    id='register-password-input'
                    name='password'
                    type='password'
                    placeholder='Пароль'
                    handleValue={handlePassword}
                />
                <button disabled={isDisabled} type="submit" className={`sign__submit ${isDisabled ? 'sign__submit_disabled' : ''}`}>Зарегистрироваться</button>
            </form>
            <p className="sign__question">Уже зарегистрированы? <Link to="/signin" className="sign__redirect">Войти</Link></p>
        </div>
    );
}

export default Register;