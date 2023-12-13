import { useState, useEffect, useContext } from "react";
import FormInput from "../FormInput/FormInput";
import { isValidEmail, isValidName } from "../../utils/validationConfig";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile({ onUpdate, onSignOut }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [isDisabled, setIsDisabled] = useState(true);
    const currentUser = useContext(CurrentUserContext);

    useEffect(() => {
        setName(currentUser.name);
        setEmail(currentUser.email);
    }, [currentUser]);

    const handleName = (value) => {
        setName(value);
    }

    const handleEmail = (value) => {
        setEmail(value);
    }

    useEffect(() => {
        (
            name && email &&
            (
                name !== currentUser.name ||
                email !== currentUser.email
            )
        ) ? setIsDisabled(false) : setIsDisabled(true);
    }, [name, email, currentUser]);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onUpdate(email, name);
    };

    const handleSignOut = () => {
        onSignOut();
    }

    return (
        <section className="profile">
            <h2 className="profile__title">Привет, {currentUser.name}!</h2>
            <form className="profile__info" onSubmit={handleSubmit}>
                <FormInput
                    className='profile'
                    defaultValue={name}
                    htmlFor='name'
                    id='profile-name-input'
                    name='name'
                    type='text'
                    placeholder='Имя'
                    handleValue={handleName}
                    checkValue={isValidName}
                />
                <FormInput
                    className='profile'
                    defaultValue={email}
                    htmlFor='email'
                    id='profile-email-input'
                    name='email'
                    type='email'
                    placeholder='Email'
                    handleValue={handleEmail}
                    checkValue={isValidEmail}
                />
                <button type='submit' disabled={isDisabled} className={`profile__button profile__edit ${isDisabled ? 'profile__edit_disabled' : ''}`}>Редактировать</button>
            </form>
            <button className="profile__button profile__sign-out" onClick={handleSignOut}>Выйти из аккаунта</button>
        </section>
    )
}

export default Profile;