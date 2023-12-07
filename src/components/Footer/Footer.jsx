import { hiddenRoutes } from "../../utils/constants";
import { useLocation} from 'react-router-dom';

function Footer() {
    const location = useLocation();

    return(
        (!hiddenRoutes.includes(location.pathname) && location.pathname !== '/profile') && (
        <footer className="footer">
            <p className="footer__info">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__subinfo">
                <p className="footer__copyright">&copy; 2023</p>
                <div className="footer__links">
                    <a className="footer__link" href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
                    <a className="footer__link" href="https://github.com/Yandex-Practicum" target="_blank" rel="noreferrer">Github</a>
                </div>
            </div>
        </footer>
        )
    );
}

export default Footer;