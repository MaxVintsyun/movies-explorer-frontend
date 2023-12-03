import { Routes, Route } from 'react-router-dom';
import Main from "../Main/Main";
import PageNotFound from '../PageNotFound/PageNotFound';


function App() {
  return (
    <div className="page">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
