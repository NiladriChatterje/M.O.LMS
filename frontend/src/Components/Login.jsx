import React, { useRef, useContext } from 'react';
import { FormControl, Flex, FormLabel, Input, Button, Box, Text } from '@chakra-ui/react';
import { toast } from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';
import { Context } from '../App';
import { useEffect } from 'react';

const Login = () => {
    const { adminLevel, setAuthentic } = useContext(Context);
    const navigate = useNavigate();
    const idRef = useRef();
    const passwordRef = useRef();

    useEffect(() => { return })
    function handleForm(e) {
        e.preventDefault();
        console.log(idRef.current.value)
        if (idRef.current.value && passwordRef.current.value) {
            setAuthentic(true);
            navigate('/marksPortal')
        } else toast('All the Fields are necessary')
    };

    function queryAdminExistence() {

    }


    if (adminLevel)
        return (
            <Flex
                bg={'blackAlpha.900'}
                w='full'
                h='100vh'>
                <Text
                    bg={'white'}
                    p={4}
                    pos={'fixed'}
                    left={10}
                    top={'15vh'}
                    h={'max-content'}
                    borderRadius={10}
                    fontWeight={900}>
                    {adminLevel.toUpperCase()}
                </Text>
                <form onSubmit={handleForm}>
                    <FormControl
                        borderRadius={10}
                        p={5}
                        bg={'white'}
                        w={window.innerWidth > 1200 ? '40vw' : '90vw'}
                        h={'45vh'}
                        boxShadow={'1px 1px 15px -10px white'}
                        pos={'fixed'}
                        left={'50%'}
                        top={'50%'}
                        transform={'translate(-50%,-50%)'}>
                        <Box
                            bg='red'
                            w={50} h={50}
                            borderRadius={'50%'}
                            pos={'absolute'}
                            top={'-20px'}
                            left='50%'
                            transform={'translateX(-50%)'} />

                        <FormLabel>ID</FormLabel>
                        <Input type='text' placeholder='ID' ref={idRef} />
                        <FormLabel>password</FormLabel>
                        <Input type='password' placeholder='PASSWORD' ref={passwordRef} />
                        <Button bg='teal.900' color='white' type='submit' variant={'solid'} left={'50%'}
                            transform={'translate(-50%)'} mt={20}>SUBMIT</Button>
                    </FormControl>
                </form>
            </Flex>
        );

    return <Navigate to={'/'} />
}

export default Login