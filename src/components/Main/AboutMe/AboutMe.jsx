import { forwardRef } from "react";
import photo from "../../../images/student-photo.jpg"

const AboutMe = forwardRef((props, ref) => {
    return(
        <section className="about-me container" ref={ref}>
            <h2 className="about-me__title">Студент</h2>
            <div className="about-me__student-info">
                <div className="about-me__main-info">
                    <h3 className="about-me__name">Максим</h3>
                    <p className="about-me__additional">Фронтенд-разработчик, 23 года</p>
                    <p className="about-me__description">Я родился и живу в Екатеринбурге, закончил УрФУ по направлению Программная инженерия. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <a className="about-me__git" href="https://github.com/MaxVintsyun" target="_blank" rel="noreferrer">Github</a>
                </div>
                <img className="about-me__image" src={photo} alt="Максим" />
            </div>
        </section>
    );
});

export default AboutMe;