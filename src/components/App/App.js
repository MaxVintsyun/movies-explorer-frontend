import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from "../Main/Main";
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import Login from '../Login/Login';
import Register from '../Register/Register';


function App() {
  const [isAuth, setIsAuth] = useState(true);

  return (
    <div className="page">
      <Header isAuth={isAuth} />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/not-found' element={<PageNotFound />} />
        <Route path="*" element={<Navigate to='/not-found' replace={true}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
