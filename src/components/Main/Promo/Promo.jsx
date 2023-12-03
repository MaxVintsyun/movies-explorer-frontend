import React from 'react';
import NavTab from '../NavTab/NavTab';

function Promo({ navTabElements }) {
    return(
        <section className='promo'>
            <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
            <NavTab elements={navTabElements}/>
        </section>
    );   
}

export default Promo;