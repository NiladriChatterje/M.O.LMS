import React, { useContext, useRef } from 'react'
import { Box, Button, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../App';

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
            bg={'#171717'}
            color={'white'}
            h={'100vh'}
            w={'full'}>
            <Box
                fontWeight={900}
                fontSize={'2xs'}
                p={5}
                textAlign={'center'}
                ref={notiRef}
                transition={'all'}
                transitionDuration={'200ms'}
                color={'blackAlpha.800'}
                transform={'translateY(-100px)'}
                pos={'fixed'}
                top={'10px'}
                bg={'white'}
                w={'55vw'}
                h={'max-content'}
                borderRadius={'10px'}
                boxShadow={'1px 1px 40px -15px white'} />

            <Button
                boxShadow={'1px 1px 25px -5px blue'}
                onClick={() => navigate('/AdminMembers')}
                onMouseEnter={() => {
                    notiRef.current.style.transform = 'translateY(10px)';
                    notiRef.current.innerText = textMessages.admin
                }}
                onMouseLeave={() => {
                    notiRef.current.style.transform = 'translateY(-100px)';
                }}
                w='25vw' bg={'blue.600'} variant={'solid'}>ADMIN</Button>

            <Button
                onClick={() => { setAdminLevel({ name: 'student', precedence: -1 }); navigate('/login'); }}
                boxShadow={'1px 1px 20px -4px green'}
                onMouseEnter={() => {
                    notiRef.current.style.transform = 'translateY(10px)';
                    notiRef.current.innerText = textMessages.student;
                }}
                onMouseLeave={() => {
                    notiRef.current.style.transform = 'translateY(-100px)';
                }}
                w='25vw' bg='green.500'>STUDENT</Button>
        </Flex>
    )
}

export default Home;