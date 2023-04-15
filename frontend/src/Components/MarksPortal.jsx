import React, { useContext } from 'react';
import { Button, Flex, FormLabel, Input, Textarea } from '@chakra-ui/react'
import { Navigate } from 'react-router-dom';
import { Context } from '../App';
import { toast } from 'react-hot-toast';

const MarksPortal = () => {
    const { authentic, adminLevel } = useContext(Context);

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
                    {adminLevel !== 'Examiner' ?
                        (<><FormLabel>Reason</FormLabel><Textarea resize={false} /></>) : null}
                    <Button mt={6} color={'white'} bg={'green.500'}
                        onClick={() => toast('Updated successfully')}>Update / Insert</Button>
                </Flex>
            </Flex>
        );
    return <Navigate to='/login' />

}

export default MarksPortal;