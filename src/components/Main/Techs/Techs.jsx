import { forwardRef } from "react";
import { techs } from "../../../utils/constants";

const Techs = forwardRef((props, ref) => {
    return(
        <section className="techs" ref={ref}>
            <h2 className="techs__title">Технологии</h2>
            <h3 className="techs__count">7 технологий</h3>
            <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <div className="techs__technologies">
                {techs.map((tech) => (
                    <p key={tech.id} className="techs__tech">{tech.value}</p>
                ))}
            </div>
        </section>
    );
});

export default Techs;