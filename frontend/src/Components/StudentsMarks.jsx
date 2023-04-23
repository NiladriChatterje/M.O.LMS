import React, { useContext, useEffect, useState } from 'react'
import {
    Table, Thead, Tbody, Tr, Th, TableContainer, Flex, Box, SkeletonText,
} from '@chakra-ui/react';
import { Context } from '../App';
import { Navigate } from 'react-router-dom';

const StudentsMarks = () => {
    const { onlyStudentCredentials, authentic } = useContext(Context);
    const [isLoading, setIsLoading] = useState(() => true);

    useEffect(() => { setTimeout(() => { setIsLoading(false) }, 2000) });
    console.log(onlyStudentCredentials);
    if (authentic)
        return (
            <Flex
                bg={'blackAlpha.900'}
                w={'full'}
                h={'100vh'}
                display={'flex'}
                flexDir={'column'}
                align={'center'}
            >
                <TableContainer bg={'white'} borderRadius={10}
                    marginTop={'15vh'}
                    w={'70vw'} h={'10vh'} pos={'relative'}>
                    <Table>
                        <Thead >
                            <Tr>
                                <Th>NAME</Th>
                                <Th>SEMSTER</Th>
                                <Th>ROLL NO.</Th>
                            </Tr>
                            <Tr>
                                <Th>{onlyStudentCredentials?.name}</Th>
                                <Th>{onlyStudentCredentials?.semester}</Th>
                                <Th>{onlyStudentCredentials?._id}</Th>
                            </Tr>
                        </Thead>
                    </Table>
                </TableContainer>
                <span style={{
                    color: 'black', borderRadius: 10, fontWeight: 900,
                    background: 'white', padding: 10, margin: 15
                }}>Marks Table</span>
                {isLoading ? <Box padding='6' boxShadow='lg' bg='white' borderRadius={10} w={'75vw'}>
                    <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='8' />
                </Box> : <TableContainer bg={'white'} borderRadius={10}
                    marginTop={'15vh'}
                    w={'70vw'} h={'max-content'} pos={'relative'}>
                    <Table>
                        <Tbody >
                            <Tr>
                                <Th>SUBJECT</Th>
                                <Th style={{ textAlign: 'right' }}>MARKS</Th>
                            </Tr>
                            {Object.keys(onlyStudentCredentials.subjects)?.map((item, i) => (
                                <Tr key={i}>
                                    <Th>{item}</Th>
                                    <Th style={{ textAlign: 'right' }}>
                                        {onlyStudentCredentials?.subjects[item]?.councilor?.score || 'N/A'}
                                    </Th>
                                </Tr>))}
                        </Tbody>
                    </Table>
                </TableContainer>}
            </Flex>
        );
    return <Navigate to={'/'} />
}

export default StudentsMarks