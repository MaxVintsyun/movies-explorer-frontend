import { forwardRef } from "react";

const AboutProject = forwardRef((props, ref) => {
    return(
        <section className="about-project container" ref={ref}>
            <h2 className="about-project__title">О проекте</h2>
            <div className="about-project__info">
                <div className="about-project__paragraph">
                    <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
                    <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about-project__paragraph">
                    <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
                    <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="about-project__parts">
                <div className="about-project__part">
                    <p className="about-project__time-spent about-project__backend">1 неделя</p>
                    <p className="about-project__part-name">Back-end</p>
                </div>
                <div className="about-project__part">
                    <p className="about-project__time-spent about-project__frontend">4 недели</p>
                    <p className="about-project__part-name">Front-end</p>
                </div>
            </div>
        </section>
    );
});

export default AboutProject;