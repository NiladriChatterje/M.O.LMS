import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../App';
import { Button, Flex } from '@chakra-ui/react';
import { Navigate, useNavigate } from 'react-router-dom';

const Department = () => {
    const [departmentArray, setDepartmentArray] = useState(() => [])
    const { authentic, setDepartment } = useContext(Context);
    const navigate = useNavigate();
    useEffect(() => {
        async function fetchDepartments() {
            const res = await fetch('http://127.0.0.1:5000/getDepartments');
            const data = await res.json();
            setDepartmentArray(data);
        };
        fetchDepartments();
    }, []);
    async function goToSemesterSelection(e) {
        console.log(e.target.textContent);
        setDepartment(departmentArray?.filter(item => item?.dept === e.target.textContent)[0]);
        navigate('/semSelection')
    }

    if (authentic)
        return (
            <Flex
                h={'100vh'}
                w={'full'}
                justifyContent={'center'}
                alignItems={'center'}>
                <Flex
                    bg={'white'}
                    boxShadow={'1px 5px 15px -9px black'}
                    borderRadius={25}
                    h={'max-content'}
                    p={5}
                    gap={20}
                    w={400}
                    justifyContent={'center'}
                    alignItems={'center'}
                    flexWrap={'wrap'}>
                    {departmentArray?.map(item => <Button
                        w={'5vw'}
                        h={'5vw'}
                        borderRadius={'50%'}
                        color={'white'}
                        fontWeight={900}
                        bg={'blue.900'}
                        onClick={goToSemesterSelection}>{item?.dept}</Button>)}
                </Flex>
            </Flex>
        )
    return <Navigate to={'/'} />;
}

export default Department