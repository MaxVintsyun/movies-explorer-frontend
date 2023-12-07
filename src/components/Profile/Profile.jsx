function Profile() {
    return(
        <section className="profile">
            <h2 className="profile__title">Привет, Максим!</h2>
            <div className="profile__info">
                <p className="profile__field">Имя<span className="profile__value">Максим</span></p>
                <p className="profile__field">E-mail<span className="profile__value">pochta@yandex.ru</span></p>
            </div>
            <div className="profile__controls">
                <button className="profile__button profile__edit">Редактировать</button>
                <button className="profile__button profile__sign-out">Выйти из аккаунта</button>
            </div>
        </section>
    )
}

export default Profile;