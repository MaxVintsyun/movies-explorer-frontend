import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from "../Main/Main";
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import Login from '../Login/Login';
import Register from '../Register/Register';
import { films } from "../../utils/constants";


function App() {
  const [isAuth, setIsAuth] = useState(true);
  const [isSortFilms, setIsSortFilms] = useState(false);
  const [isSortSavedFilms, setIsSortSavedFilms] = useState(false);
  const [filmsToShow, setFilmsToShow] = useState(12);
  const [isNavOpened, setIsNavOpened] = useState(false);

  const savedFilms = films.filter((film) => {
    return film.owner === 'me';
  })

  const handleSortFilms = () => {
    setIsSortFilms(!isSortFilms)
  }

  const handleSortSavedFilms = () => {
    setIsSortSavedFilms(!isSortSavedFilms)
  }

  const handleOpenNav = () => {
    setIsNavOpened(true);
  }

  const handleCloseNav = () => {
    setIsNavOpened(false);
  }

  return (
    <div className="page">
      <Header isAuth={isAuth} isOpenNav={isNavOpened} openNav={handleOpenNav} closeNav={handleCloseNav} />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movies' element={<Movies films={films} isSort={isSortFilms} filmsToShow={filmsToShow} onSort={handleSortFilms} />} />
        <Route path='/saved-movies' element={<SavedMovies films={savedFilms} isSort={isSortSavedFilms} onSort={handleSortSavedFilms} />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/not-found' element={<PageNotFound />} />
        <Route path="*" element={<Navigate to='/not-found' replace={true} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
