import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="sign">
            <Link to='/' className="sign__logo" />
            <h2 className="sign__title">Рады видеть!</h2>
            <form className="sign__form" id="login-form-container" name="login-form">
                <label className="sign__field" htmlFor="email">
                    <span className="sign__placeholder">Email</span>
                    <input className="sign__input" id="login-email-input" name="email" type="email" required />
                    <span className="sign__error"></span>
                </label>
                <label className="sign__field" htmlFor="password">
                    <span className="sign__placeholder">Пароль</span>
                    <input className="sign__input" id="login-password-input" name="password" type="password" required />
                    <span className="sign__error"></span>
                </label>
                <button type="submit" className="sign__submit">Войти</button>
            </form>
            <p className="sign__question">Ещё не зарегистрированы? <Link to="/signup" className="sign__redirect">Регистрация</Link></p>
        </div>
    );
}

export default Login;