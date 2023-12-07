import { Link } from "react-router-dom";

function Register() {
    return (
        <div className="sign">
            <Link to='/' className="sign__logo" />
            <h2 className="sign__title">Добро пожаловать!</h2>
            <form className="sign__form" id="register-form-container" name="register-form">
            <label className="sign__field" htmlFor="name">
                    <span className="sign__placeholder">Имя</span>
                    <input className="sign__input" id="register-name-input" name="name" type="text" required />
                    <span className="sign__error"></span>
                </label>
                <label className="sign__field" htmlFor="email">
                    <span className="sign__placeholder">Email</span>
                    <input className="sign__input" id="register-email-input" name="email" type="email" required />
                    <span className="sign__error"></span>
                </label>
                <label className="sign__field" htmlFor="password">
                    <span className="sign__placeholder">Пароль</span>
                    <input className="sign__input" id="register-password-input" name="password" type="password" required />
                    <span className="sign__error"></span>
                </label>
                <button type="submit" className="sign__submit">Зарегистрироваться</button>
            </form>
            <p className="sign__question">Уже зарегистрированы? <Link to="/signin" className="sign__redirect">Войти</Link></p>
        </div>
    );
}

export default Register;