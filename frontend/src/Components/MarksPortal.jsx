import React, { useContext, useEffect, useRef, useState } from 'react';
import { Button, Flex, FormLabel, Input, Th, Tr, TableContainer, TableCaption, Table, Thead, Td, Tbody, Text } from '@chakra-ui/react'
import { Navigate } from 'react-router-dom';
import { Context } from '../App';
import { toast } from 'react-hot-toast';
import axios from 'axios';

const selectReasonList = ['Counting Mistake', 'Skipped Checking', 'Misinterpretation', 'wrong question'];
let examinerMarksList, scrutinizerMarksList, headExaminerMarksList, tabulatorMarksList, ControllerMarksList;
const MarksPortal = () => {
    const [remark, setRemark] = useState(() => 0);
    const [localData, setLocalData] = useState(() => { })
    const [deployToBlock, setDeployToBlockchain] = useState(() => false);
    const [listOfStudents, setListOfStudents] = useState(() => []);
    let precededAuthority = 'examiner'
    const { subject, subjectArray, adminLevel, Adminmembers } = useContext(Context);

    const remarkRef = useRef(' ');
    const subjectRef = useRef();
    const rollRef = useRef();
    const marksRef = useRef();
    const semRef = useRef();

    const examinerRef = useRef();
    const scrutinizerRef = useRef();
    const headExaminerRef = useRef();
    const tabulatorRef = useRef();
    const controllerRef = useRef();

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
        let { data } = await axios.post('http://localhost:5000/updatestdmarks', {
            std_roll: JSON.stringify(rollRef.current.value),
            sem: JSON.stringify(subjectArray?.sem),
            marks: JSON.stringify(marksRef.current.value),
            adminLevel: JSON.stringify(adminLevel.name),
            subject: JSON.stringify(subjectRef.current.value.toUpperCase()),
            precededAuthority: JSON.stringify(precededAuthority)
        });


        if (typeof data == 'string') toast(data);
        else { toast("Updated successfully"); setLocalData(data); setDeployToBlockchain(true); }
        if (data?.subjects[subjectRef.current.value.toUpperCase()][precededAuthority].score - parseFloat(marksRef.current.value) !== 0) {
            toast("Your entry is different from your preceded authority level");
            toast("Give a reason on that");
            setRemark(1);
        } else setRemark(0);

        if (!remark) {

        }
    };

    async function updateRemark() {
        console.log(remarkRef.current);

        if (localData && remarkRef.current) {
            let duplicate = { ...localData };
            duplicate.subjects[subjectRef.current.value.toUpperCase()][adminLevel?.name]['remark'] = remarkRef.current;

            const { data } = await axios.post('http://localhost:5000/updatestdremarks', {
                result: JSON.stringify(duplicate),
            });
            console.log(data)
            toast(data);
        }
    }

    async function getListOfStudentsWithUpdate() {
        const { data } = await axios.post('');
    }

    function updateToDB() {
        for (let i of Adminmembers) {
            if (adminLevel.name === 'examiner') break;
            if (adminLevel?.precedence - 1 === i.precedence) {
                precededAuthority = i.name;
                break;
            }
        }
        let flag = 0;
        for (let i in listOfStudents) {
            let j = parseInt(i)
            if (adminLevel.name === 'examiner') {
                if (examinerMarksList[j].value !== '') {
                    flag++
                }
                else {
                    //toast("Please Check that all students have the marks")
                }
            }
            else if (adminLevel.name === 'scrutinizer') {

            }
            else if (adminLevel.name === 'head_examiner') {

            }
            else if (adminLevel.name === 'tabulator') {

            }
            else {

            }
        }
        if (flag === listOfStudents.length) toast('Updated')
        else toast('Please Check that all students have the marks')

    }

    useEffect(() => {
        async function getListOfStudents(sem) {
            const { data } = await axios.post('http://localhost:5000/getStudentList', {
                sem: JSON.stringify(sem),
            });
            console.log(data)
            setListOfStudents(data);
        };
        getListOfStudents(subjectArray.sem);

        examinerMarksList = document.getElementsByClassName('examinerMarks');
        scrutinizerMarksList = document.getElementsByClassName('scrutinizerMarks');
        headExaminerMarksList = document.getElementsByClassName('headExaminerMarks');
        tabulatorMarksList = document.getElementsByClassName('tabulatorMarks');
        ControllerMarksList = document.getElementsByClassName('ControllerMarks');
    }, []);


    if (subject)
        return (
            <Flex w={'full'} h={'100vh'} flexDir={'column'} alignItems={'center'}>
                <Text>{subject.name}</Text>
                <TableContainer bg={'white'} boxShadow={'1px 1px 10px -8px black'} p={10}>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>NAME</Th>
                                <Th>ROLL NO.</Th>
                                <Th isNumeric>EXAMINER</Th>
                                <Th isNumeric>SCRUTINIZER</Th>
                                <Th isNumeric>HEAD EXAMINER</Th>
                                <Th isNumeric>TABULATOR</Th>
                                <Th isNumeric>CONTROLLER OF EXAMINATION</Th>
                                {adminLevel.name !== 'examiner' && <Th isNumeric>REMARKS</Th>}
                            </Tr>
                        </Thead>
                        <Tbody >
                            {listOfStudents?.map(item => <Tr key={item._id}>
                                <Td>{item.name}</Td>
                                <Td>{item._id}</Td>
                                <Td ><Input border={'1px solid black'} type={'number'} className='examinerMarks' ref={examinerRef} w={100} disabled={!(adminLevel.name === 'examiner')} required={adminLevel.name === 'examiner'} /></Td>
                                <Td ><Input border={'1px solid black'} type={'number'} className='scrutinizerMarks' ref={scrutinizerRef} w={100} disabled={!(adminLevel?.name === 'scrutinizer')} required={adminLevel?.name === 'scrutinizer'} /></Td>
                                <Td ><Input border={'1px solid black'} type={'number'} className='headExaminerMarks' ref={headExaminerRef} w={100} disabled={!(adminLevel?.name === 'head_examiner')} required={adminLevel?.name === 'head_examiner'} /></Td>
                                <Td ><Input border={'1px solid black'} type={'number'} className='tabulatorMarks' ref={tabulatorRef} w={100} disabled={!(adminLevel.name === 'tabulator')} required={adminLevel.name === 'tabulator'} /></Td>
                                <Td ><Input border={'1px solid black'} type={'number'} className='ControllerMarks' ref={controllerRef} w={100} disabled={!(adminLevel.name === 'Controller_of_Examination')} required={adminLevel.name === 'Controller_of_Examination'} /></Td>
                                {adminLevel.name !== 'examiner' && <Td ><Input border={'1px solid black'} type={'text'} w={100} ref={remarkRef} /></Td>}
                            </Tr>)}
                        </Tbody>
                        <TableCaption><Button onClick={updateToDB} color={'white'} bg={'blue.900'}>Update</Button></TableCaption>
                    </Table>
                </TableContainer>
            </Flex>
        );
    return <Navigate to='/login' />

}

export default MarksPortal;