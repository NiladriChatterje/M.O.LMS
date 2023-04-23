import React, { useContext, useRef, useState } from 'react';
import { Button, Flex, FormLabel, Input, Menu, MenuItem, MenuList, MenuButton } from '@chakra-ui/react'
import { Navigate } from 'react-router-dom';
import { Context } from '../App';
import { toast } from 'react-hot-toast';
import axios from 'axios';

const selectReasonList = ['Counting Mistake', 'Skipped Checking', 'Misinterpretation', 'wrong question'];
const MarksPortal = () => {
    const [remark, setRemark] = useState(() => 0);
    const [localData, setLocalData] = useState(() => { })
    let precededAuthority = 'examiner'
    const { authentic, adminLevel, Adminmembers } = useContext(Context);

    const remarkRef = useRef();
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
        let { data } = await axios.post('http://localhost:5000/updatestdmarks', {
            std_roll: JSON.stringify(rollRef.current.value),
            sem: JSON.stringify(semRef.current.value),
            marks: JSON.stringify(marksRef.current.value),
            adminLevel: JSON.stringify(adminLevel.name),
            subject: JSON.stringify(subjectRef.current.value.toUpperCase()),
            precededAuthority: JSON.stringify(precededAuthority)
        });


        if (typeof data == 'string') toast(data);
        else { toast("Updated successfully"); setLocalData(data); }
        if (data?.subjects[subjectRef.current.value.toUpperCase()][precededAuthority].score - parseFloat(marksRef.current.value) !== 0) {
            toast("Your entry is different from your preceded authority level");
            toast("Give a reason on that");
            setRemark(1);
        } else setRemark(0);

    };

    async function updateRemark() {
        console.log(remarkRef.current);

        if (localData && remarkRef.current) {
            let duplicate = { ...localData };
            console.log(duplicate);
            duplicate.subjects[subjectRef.current.value.toUpperCase()][adminLevel?.name]['remark'] = remarkRef.current;

            const { data } = await axios.post('http://localhost:5000/updatestdremarks', {
                result: JSON.stringify(duplicate),
            });
            console.log(data)
            toast(data);
        }
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
                    <FormLabel>Student Roll No.</FormLabel>
                    <Input type='number' ref={rollRef} />
                    <FormLabel>Semester</FormLabel>
                    <Input type='number' ref={semRef} />
                    <FormLabel>Subject</FormLabel>
                    <Input type='text' maxLength={11} ref={subjectRef} />
                    <FormLabel>Marks</FormLabel>
                    <Input type='number' ref={marksRef} maxLength={3} />
                    {adminLevel.name !== 'examiner' && remark ?
                        (<><FormLabel>Reason</FormLabel>
                            <Menu>
                                <MenuButton
                                    bg={'green.600'}
                                    color={'white'}
                                    borderRadius={10}
                                >
                                    Remarks
                                </MenuButton>
                                <MenuList w={'full'}>
                                    {selectReasonList?.map((item, i) => <MenuItem key={i}
                                        onClick={() => {
                                            remarkRef.current = item;
                                            updateRemark();
                                        }}>{item}</MenuItem>)}
                                </MenuList>
                            </Menu></>) : null}
                    <Button mt={6} color={'white'} bg={'green.500'}
                        onClick={updateMarks}>Update / Insert</Button>
                </Flex>
            </Flex>
        );
    return <Navigate to='/login' />

}

export default MarksPortal;