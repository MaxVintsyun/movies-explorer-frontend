import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import ProtectedRoute from '../Main/ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from "../Main/Main";
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import Login from '../Login/Login';
import Register from '../Register/Register';
import { moviesApi } from '../../utils/MoviesApi';
import { mainApi } from '../../utils/MainApi';
import searchedMovies from '../../utils/searchedFilms';
import filterFilms from '../../utils/filterMovies';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const [isNavOpened, setIsNavOpened] = useState(false);

  const [films, setFilms] = useState([]);
  const [savedFilms, setSavedFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [isSortFilms, setIsSortFilms] = useState(JSON.parse(localStorage.getItem('isSortFilms')) || false);
  const [searchedFilms, setSearchedFilms] = useState(JSON.parse(localStorage.getItem('searchedFilms')) || []);
  const [searchParam, setSearchParam] = useState(localStorage.getItem('searchParam') || '');
  const [sortedFilms, setSortedFilms] = useState([]);
  const [searchText, setSearchText] = useState('');

  const [isSortSavedFilms, setIsSortSavedFilms] = useState(false);
  const [searchedSavedFilms, setSearchedSavedFilms] = useState([]);
  const [searchParamSaved, setSearchParamSaved] = useState('');
  const [sortedSavedFilms, setSortedSavedFilms] = useState([]);
  const [displayedSavedFilms, setDisplayedSavedFilms] = useState(savedFilms)

  const navigate = useNavigate();

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      mainApi.checkToken(jwt)
        .then((res) => {
          setCurrentUser(res);
          setIsLoggedIn(true);
          navigate('/movies', { replace: true });
        })
        .catch((error) => {
          console.error('Ошибка: ', error);
        });
    }
  }, []);

  useEffect(() => {
    setIsLoading(true);
    moviesApi.getFilms()
      .then((res) => {
        const films = res.map((film) => ({ ...film, owner: '' }));
        setFilms(films);
      })
      .catch(() => {
        setSearchText('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, []);

  useEffect(() => {
    setIsLoading(true);
    searchedMovies(searchParam, films)
      .then((searchedMovies) => {
        setSearchedFilms(searchedMovies);
      })
      .catch((err) => {
        setSearchedFilms([]);
        setSearchText(err);
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [searchParam, films]);

  useEffect(() => {
    setIsLoading(true);
    searchedMovies(searchParamSaved, savedFilms)
      .then((searchedMovies) => {
        setSearchedSavedFilms(searchedMovies);
      })
      .catch((err) => {
        setSearchedSavedFilms([]);
        setSearchText(err);
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [searchParamSaved, savedFilms]);

  useEffect(() => {
    setIsLoading(true);
    mainApi.getMovies()
      .then((movies) => {
        setSavedFilms(movies);
      })
      .catch((err) => {
        console.error('Ошибка: ', err);
      })
  }, [isLoggedIn]);

  useEffect(() => {
    const newFilms = filterFilms(savedFilms, films, currentUser);
    setFilms(newFilms);
  }, [savedFilms, films, currentUser]);

  useEffect(() => {
    const sortedFilms = searchedFilms.filter((film) => {
      return film.duration <= 40;
    });

    setSortedFilms(sortedFilms);
  }, [searchedFilms]);

  useEffect(() => {
    const sortedFilms = displayedSavedFilms.filter((film) => {
      return film.duration <= 40;
    });

    setSortedSavedFilms(sortedFilms);
  }, [displayedSavedFilms, savedFilms]);

  useEffect(() => {
    searchParamSaved ? setDisplayedSavedFilms(searchedSavedFilms) : setDisplayedSavedFilms(savedFilms);
  }, [searchParamSaved, searchedSavedFilms, savedFilms])

  useEffect(() => {
    localStorage.setItem('searchedFilms', JSON.stringify(searchedFilms));
    localStorage.setItem('isSortFilms', JSON.stringify(isSortFilms));
    localStorage.setItem('searchParam', searchParam);
  }, [searchedFilms, isSortFilms, searchParam]);

  const handleRegister = (email, password, name) => {
    mainApi.registerUser(email, password, name)
      .then(() => {
        navigate('/signin', { replace: true });
      })
      .catch((err) => {
        console.error('Ошибка: ', err);
      });
  }

  function handleLogin(email, password) {
    mainApi.authUser(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          setIsLoggedIn(true);
          setCurrentUser(data)
          navigate('/movies', { replace: true });
        }
      })
      .catch((error) => {
        console.error('Ошибка: ', error);
      });
  }

  function handleSignOut() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('searchedFilms');
    localStorage.removeItem('isSortFilms');
    localStorage.removeItem('searchParam');
    setIsLoggedIn(false);
    navigate('/signin', { replace: true })
  }

  function handleUpdateUserInfo(email, name) {
    mainApi.updateUserInfo(email, name)
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.error('Ошибка: ', err);
      });
  }

  function hanlePostMovie(movie) {
    mainApi.postMovie(movie)
      .then((newMovie) => {
        setSavedFilms([newMovie, ...savedFilms]);
      })
      .catch((err) => {
        console.error('Ошибка: ', err);
      });
  }

  function handleDeleteMovie(movieId) {
    mainApi.deleteMovie(movieId)
      .then(() => {
        setSavedFilms(savedFilms => savedFilms.filter((movie) => movie.movieId !== movieId));
      })
      .catch((err) => {
        console.error('Ошибка: ', err);
      });
  }

  const handleSearch = (param) => {
    setSearchParam(param);
  }

  const handleSavedSearch = (param) => {
    setSearchParamSaved(param);
  }

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
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header isLoggedIn={isLoggedIn} isOpenNav={isNavOpened} openNav={handleOpenNav} closeNav={handleCloseNav} />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/movies'
            element={
              <ProtectedRoute
                element={Movies}
                isLoading={isLoading}
                films={isSortFilms ? sortedFilms : searchedFilms}
                searchReq={searchParam}
                searchText={searchText}
                isSort={isSortFilms}
                onSearch={handleSearch}
                onSort={handleSortFilms}
                onSave={hanlePostMovie}
                onDelete={handleDeleteMovie}
                isLoggedIn={isLoggedIn}
              />}
          />
          <Route path='/saved-movies'
            element={
              <ProtectedRoute
                element={SavedMovies}
                isLoading={isLoading}
                films={isSortSavedFilms ? sortedSavedFilms : displayedSavedFilms}
                searchReq={searchParamSaved}
                searchText={searchText}
                isSort={isSortSavedFilms}
                onSearch={handleSavedSearch}
                onSort={handleSortSavedFilms}
                onDelete={handleDeleteMovie}
                isLoggedIn={isLoggedIn}
              />}
          />
          <Route path='/profile'
            element={
              <ProtectedRoute
                element={Profile}
                onUpdate={handleUpdateUserInfo}
                onSignOut={handleSignOut}
                isLoggedIn={isLoggedIn}
              />}
          />
          <Route path='/signin' element={<Login onLogin={handleLogin} />} />
          <Route path='/signup' element={<Register onRegister={handleRegister} />} />
          <Route path='/not-found' element={<PageNotFound />} />
          <Route path="*" element={<Navigate to='/not-found' replace={true} />} />
        </Routes>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
