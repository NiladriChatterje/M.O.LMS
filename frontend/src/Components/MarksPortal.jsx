import React, { useContext, useRef, useState } from 'react';
import { Button, Flex, FormLabel, Input, Textarea } from '@chakra-ui/react'
import { Navigate } from 'react-router-dom';
import { Context } from '../App';
import { toast } from 'react-hot-toast';
import axios from 'axios';

const MarksPortal = () => {
    let precededAuthority = 'examiner'
    const { authentic, adminLevel, Adminmembers } = useContext(Context);

    const subjectRef = useRef();
    const rollRef = useRef();
    const marksRef = useRef();
    const semRef = useRef();

    async function updateMarks() {
        if (!(subjectRef.current.value && rollRef.current.value && marksRef.current.value && semRef.current.value)) {
            toast("Specific fields are mandatory to be filled");
            return;
        }
        for (let i of Adminmembers) {
            if (adminLevel.name === 'examiner') break;
            if (adminLevel?.precedence - 1 === i.precedence) {
                precededAuthority = i.name;
                break;
            }
        }
        const { data } = await axios.post('http://localhost:5000/updatestdmarks', {
            std_roll: JSON.stringify(rollRef.current.value),
            sem: JSON.stringify(semRef.current.value),
            marks: JSON.stringify(marksRef.current.value),
            adminLevel: JSON.stringify(adminLevel),
            subject: JSON.stringify(subjectRef.current.value.toUpperCase()),
            precededAuthority: JSON.stringify(precededAuthority)
        });
        console.log(data)
        toast(data)
    }

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
                    <Input type='text' required />
                    <FormLabel>Student Roll No.</FormLabel>
                    <Input type='number' ref={rollRef} />
                    <FormLabel>Semester</FormLabel>
                    <Input type='number' ref={semRef} />
                    <FormLabel>Subject</FormLabel>
                    <Input type='text' maxLength={11} ref={subjectRef} />
                    <FormLabel>Marks</FormLabel>
                    <Input type='number' ref={marksRef} />
                    {adminLevel.name !== 'examiner' ?
                        (<><FormLabel>Reason</FormLabel><Textarea resize={'None'} /></>) : null}
                    <Button mt={6} color={'white'} bg={'green.500'}
                        onClick={updateMarks}>Update / Insert</Button>
                </Flex>
            </Flex>
        );
    return <Navigate to='/login' />

}

export default MarksPortal;