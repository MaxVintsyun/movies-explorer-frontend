import { Routes, Route, Navigate } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from "../Main/Main";
import PageNotFound from '../PageNotFound/PageNotFound';
import Login from '../Login/Login';
import Register from '../Register/Register';


function App() {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
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
