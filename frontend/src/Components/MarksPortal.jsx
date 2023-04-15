import React, { useContext } from 'react';
import { Button, Flex, FormLabel, Input } from '@chakra-ui/react'
import { Navigate } from 'react-router-dom';
import { Context } from '../App';

const MarksPortal = () => {
    const { authentic } = useContext(Context);

    if (authentic)
        return (
            <Flex
                bg={'blackAlpha.900'}
                w={'full'}
                h={'100vh'}>
                <Flex
                    flexDir={'column'}
                    bg={'white'}
                    borderRadius={10}
                    w={400}
                    h={'max-content'}
                    p={5}
                    pos={'fixed'}
                    left={'50%'}
                    top={'50%'}
                    transform={'translate(-50%,-50%)'}>
                    <FormLabel>Student Name</FormLabel>
                    <Input type='text' />
                    <FormLabel>Student Roll No.</FormLabel>
                    <Input type='number' />
                    <FormLabel>Semester</FormLabel>
                    <Input type='number' />
                    <FormLabel>Marks</FormLabel>
                    <Input type='number' />
                    <Button mt={6} color={'white'} bg={'green.500'} onClick={''}>Update / Insert</Button>
                </Flex>
            </Flex>
        );
    return <Navigate to='/login' />

}

export default MarksPortal;