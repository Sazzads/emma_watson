import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Login from './Components/LoginPage/Login/Login';
import Register from './Components/LoginPage/Register/Register';
import Loading from './Components/Loading/Loading';
import Checkout from './Components/CheckOut/Checkout';
import RequireAuth from './Components/LoginPage/RequireAuth/RequireAuth';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout />
          </RequireAuth>
        } />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/loading' element={<Loading />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
