import React, { useContext } from 'react';
import { Context } from '../App';
import { Button, Flex } from '@chakra-ui/react';
import { Navigate, useNavigate } from 'react-router-dom';

const SubjectSelection = () => {
    const { subjectArray, setSubject } = useContext(Context);
    const navigate = useNavigate();
    if (subjectArray.length !== 0)
        return (
            <Flex w={'full'} h={'100vh'}
                alignItems={'center'} justifyContent={'center'}>
                <Flex w={400}
                    p={5}
                    bg={'white'}
                    boxShadow={'1px 1px 15px -8px black'}
                    h={'max-content'} gap={10}
                    borderRadius={20} flexDir={'column'}
                    justifyContent={'center'}
                > {subjectArray?.subjects.map(item => <Button
                    color={'white'} fontWeight={900}
                    onClick={() => {
                        setSubject(item);
                        navigate('/marksPortal');
                    }}
                    bg={'blue.900'}>
                    {item.name}
                </Button>)}</Flex>
            </Flex>
        );
    return <Navigate to='/' />
}

export default SubjectSelection