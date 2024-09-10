import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SigIn from './pages/SigIn';
import Signup from './pages/Signup';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SigIn />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/about' element={<About />} />

        {/* Protect profile route with PrivateRoute */}
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
