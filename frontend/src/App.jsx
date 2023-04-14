import { useRef, useEffect, useState, createContext } from 'react'
import './App.css';
import PreLoader from './PreLoader';
import { Home, Navbar, Login, MarksPortal, AdminMembers } from './Components'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';

export const Context = createContext();
function App() {
  const [adminLevel, setAdminLevel] = useState(null);
  const [authentic, setAuthentic] = useState(() => false);
  const loaderRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      loaderRef.current.style.display = 'none';
    }, 2500);
  }, []);

  return (
    <Context.Provider value={{ adminLevel, setAdminLevel, authentic, setAuthentic }}>
      <Toaster />
      <PreLoader loaderRef={loaderRef} />
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/admin'} element={<AdminMembers />} />
        <Route path={'/marksPortal'} element={<MarksPortal />} />
        <Route path={'/AdminMembers'} element={<AdminMembers />} />
      </Routes>
    </Context.Provider>
  )
}

export default App
