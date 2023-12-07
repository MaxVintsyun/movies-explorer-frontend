import { useNavigate } from 'react-router-dom';

function PageNotFound() {
    const navigate = useNavigate();

    function goBack() {
        navigate(-1);
    }

    return(
        <div className='not-found'>
            <div className='not-found__main-info'>
                <h3 className='not-found__title'>404</h3>
                <p className='not-found__text'>Страница не найдена</p>
            </div>
            <button className='not-found__go-back' onClick={goBack}>Назад</button>
        </div>
    );
}

export default PageNotFound;