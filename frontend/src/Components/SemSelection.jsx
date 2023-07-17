import React, { useContext } from 'react'
import { Button, Flex } from '@chakra-ui/react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Context } from '../App';

const SemSelection = () => {
    const { department, setSubjectArray } = useContext(Context);
    const navigate = useNavigate();

    function goToSubject(sem) {
        setSubjectArray({ sem: sem, subjects: department.subjects[sem] });
        navigate('/SubjectSelection');
    }

    if (department)
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
                    {Object.keys(department.subjects)?.map(item => <Button
                        w={'5vw'}
                        h={'5vw'}
                        borderRadius={'50%'}
                        color={'white'}
                        fontWeight={900}
                        bg={'blue.900'}
                        onClick={() => goToSubject(item)}>SEM-{item}</Button>)}
                </Flex>
            </Flex>
        )
    return <Navigate to={'/'} />;
}

export default SemSelection