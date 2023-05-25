import React, { useRef, useContext, useState } from 'react';
import { FormControl, Flex, FormLabel, Input, Button, Box, Text, InputRightElement, InputGroup } from '@chakra-ui/react';
import { toast } from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';
import { Context } from '../App';
import { AiFillEye } from 'react-icons/ai'
import axios from 'axios';
import { useAddress, useContract, useContractWrite } from '@thirdweb-dev/react';

const Login = () => {
    const [toggle, setToggle] = useState(() => false)
    const { adminLevel, setAuthentic, setStudentCredentials } = useContext(Context);
    const navigate = useNavigate();
    const idRef = useRef();
    const passwordRef = useRef();

    const address = useAddress();
    const { contract } = useContract('0x02142106Ae7DcB5242FD2Ce5200B89903bEc7B03');
    const { mutate: setExaminer } = useContractWrite(contract, "setExaminer");



    async function handleForm(e) {
        e.preventDefault();

        if (idRef.current.value && passwordRef.current.value) {
            let outcome = await queryAdminExistence({ id: idRef.current.value, password: passwordRef.current.value });
            if (outcome) {
                setAuthentic(true);
                if (adminLevel.name !== 'student') {
                    if (adminLevel == 'examiner') setExaminer(address)
                    navigate('/marksPortal');
                }
                else
                    navigate('/marksVisible');
            }
            else toast('Wrong Credentials !!')
        } else toast('All the Fields are necessary')
    };

    async function queryAdminExistence(object) {

        const { data } = await axios.post("http://localhost:5000/getLoginData", {
            id: JSON.stringify(object?.id),
            password: JSON.stringify(object?.password),
            admin: JSON.stringify(adminLevel?.name)
        });
        if (JSON.parse(data)) {
            setStudentCredentials(JSON.parse(data)); return true;
        }
        return JSON.parse(data);
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
                    {adminLevel?.name.toUpperCase()}
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
                        <Input type='number' placeholder='ID' ref={idRef} />
                        <FormLabel>password</FormLabel>
                        <InputGroup>
                            <Input type={toggle ? 'text' : 'password'} placeholder='PASSWORD' ref={passwordRef} />
                            <InputRightElement
                                onClick={() => setToggle(prev => !prev)}
                                cursor={'pointer'}
                                children={<AiFillEye color='gray.900' />}
                            /></InputGroup>
                        <Button bg='teal.900' color='white' boxShadow={'0 0 8px -2px rgb(10,14,220)'}
                            type='submit' variant={'solid'} left={'50%'}
                            transform={'translate(-50%)'} mt={20}>SUBMIT</Button>
                    </FormControl>
                </form>
            </Flex>
        );

    return <Navigate to={'/'} />
}

export default Login