import React, { useContext, useRef } from 'react'
import { Button, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../App';
import { toast } from 'react-hot-toast';

const textMessages = {
    admin: `The Admin Portal is for •Examiners •Scrutinizers •Head-Examiner •Tabulator & •Councilors`,
    student: `The Student Portal is for obtaining the marks of their exams through provided credentials`
}
const Home = () => {
    const { setAdminLevel } = useContext(Context);
    const notiRef = useRef();
    const navigate = useNavigate();


    return (
        <Flex
            flexDir={'column'}
            placeItems={'center'}
            justifyContent={'space-evenly'}
            h={'100vh'}
            w={'full'}>
            <Flex w={'full'} h={'80%'} flexDir={window.innerWidth < 1200 ? 'column' : 'row'}
                justifyContent={'space-evenly'}
                alignItems={'center'}>
                <Button
                    boxShadow={'1px 1px 10px -5px rgb(0,0,100)'}
                    borderRadius={'50%'}
                    color={'white'} fontWeight={900}
                    onClick={() => navigate('/AdminMembers')}
                    onMouseEnter={() => toast(textMessages.admin)}
                    w={window.innerWidth > 1200 ? '10vw' : '25vw'}
                    h={window.innerWidth > 1200 ? '10vw' : '25vw'}
                    bg={'blue.800'} variant={'solid'}>ADMIN</Button>

                <Button
                    onClick={() => { setAdminLevel({ name: 'student', precedence: -1 }); navigate('/login'); }}
                    boxShadow={'1px 1px 10px -4px green'} color={'white'} fontWeight={900} borderRadius={'50%'}
                    onMouseEnter={() => toast(textMessages.student)}
                    w={window.innerWidth > 1200 ? '10vw' : '25vw'}
                    h={window.innerWidth > 1200 ? '10vw' : '25vw'}
                    bg='green.800'>STUDENT</Button>

            </Flex>
        </Flex>
    )
}

export default Home;