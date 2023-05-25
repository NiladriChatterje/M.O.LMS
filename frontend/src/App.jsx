import { useRef, useEffect, useState, createContext } from 'react'
import './App.css';
import PreLoader from './PreLoader';
import { Home, Navbar, Login, MarksPortal, AdminMembers, StudentsMarks } from './Components'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { ConnectWallet } from "@thirdweb-dev/react";

const Adminmembers = [{ name: 'examiner', precedence: 0 }, { name: 'scrutinizer', precedence: 1 },
{ name: 'head_examiner', precedence: 2 }, { name: 'tabulator', precedence: 3 }, { name: 'councilor', precedence: 4 }];
export const Context = createContext();
function App() {
  const [adminLevel, setAdminLevel] = useState(null);
  const [authentic, setAuthentic] = useState(() => false);
  const [onlyStudentCredentials, setStudentCredentials] = useState({});
  const loaderRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      loaderRef.current.style.display = 'none';
    }, 2500);
  }, []);

  return (
    <Context.Provider value={{ adminLevel, setAdminLevel, authentic, setAuthentic, Adminmembers, onlyStudentCredentials, setStudentCredentials }}>
      <Toaster />
      <PreLoader loaderRef={loaderRef} />
      <Navbar />
      <ConnectWallet style={{ position: 'fixed', top: 5, right: 10 }} />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/admin'} element={<AdminMembers />} />
        <Route path={'/marksPortal'} element={<MarksPortal />} />
        <Route path={'/AdminMembers'} element={<AdminMembers />} />
        <Route path={'/marksVisible'} element={<StudentsMarks />} />
      </Routes>
    </Context.Provider>
  )
}

export default App
