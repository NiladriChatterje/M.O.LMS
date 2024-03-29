import { useRef, useEffect, useState, createContext } from 'react'
import './App.css';
import PreLoader from './PreLoader';
import { Home, Navbar, Login, MarksPortal, AdminMembers, StudentsMarks, Department, SemSelection, SubjectSelection } from './Components'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import Background from './background.png'
import { ConnectWallet } from "@thirdweb-dev/react";
import { Box } from '@chakra-ui/react';

const Adminmembers = [{ name: 'examiner', precedence: 0 }, { name: 'scrutinizer', precedence: 1 },
{ name: 'head_examiner', precedence: 2 }, { name: 'tabulator', precedence: 3 }, { name: 'Controller_of_Examination', precedence: 4 }];
export const Context = createContext();
function App() {
  const [adminLevel, setAdminLevel] = useState(null);
  const [authentic, setAuthentic] = useState(() => false);
  const [onlyStudentCredentials, setStudentCredentials] = useState({});
  const [department, setDepartment] = useState(() => { });
  const [subjectArray, setSubjectArray] = useState(() => []);
  const [subject, setSubject] = useState(() => '');
  const loaderRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      loaderRef.current.style.display = 'none';
    }, 2500);
  }, []);

  return (
    <Context.Provider value={{
      adminLevel, setAdminLevel, authentic, subjectArray, setSubjectArray, subject, setSubject,
      department, setDepartment, setAuthentic, Adminmembers, onlyStudentCredentials, setStudentCredentials
    }}>
      <Toaster containerStyle={{ fontSize: 10, fontWeight: 900 }} />
      <PreLoader loaderRef={loaderRef} />
      <Navbar />
      {/*<ConnectWallet style={{ position: 'fixed', top: 5, right: 10 }} />*/}
      <Box
        bgImg={Background}
        bgRepeat={'no-repeat'}
        bgSize={'cover'}>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/department'} element={<Department />} />
          <Route path={'/semSelection'} element={<SemSelection />} />
          <Route path={'/SubjectSelection'} element={<SubjectSelection />} />
          <Route path={'/admin'} element={<AdminMembers />} />
          <Route path={'/marksPortal'} element={<MarksPortal />} />
          <Route path={'/AdminMembers'} element={<AdminMembers />} />
          <Route path={'/marksVisible'} element={<StudentsMarks />} />
        </Routes>
      </Box>
    </Context.Provider>
  )
}

export default App
