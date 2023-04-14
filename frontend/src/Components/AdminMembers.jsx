import React, { useContext } from 'react';
import { Flex, Button } from '@chakra-ui/react';
import { Context } from '../App';
import { useNavigate } from 'react-router-dom';


const AdminMembers = () => {
    const { setAdminLevel } = useContext(Context);
    const navigate = useNavigate();

    return (
        <Flex h={'100vh'} w={'full'}
            bg={'blackAlpha.900'}>
            <Flex
                p={5}
                flexDir={'column'}
                justifyContent={'space-between'}
                alignItems={'center'}
                position={'fixed'}
                left={'50%'}
                top={'50%'}
                transform={'translate(-50%,-50%)'}
                h={500} w={400}
                borderRadius={10}
                bg={'white'}>
                <Button bg={'teal.600'} color={'white'} onClick={() => { setAdminLevel('Examiner'); navigate('/login') }} variant={'solid'}>Examiner</Button>
                <Button bg={'teal.600'} color={'white'} onClick={() => { setAdminLevel('Scrutinizer'); navigate('/login') }} variant={'solid'}>Scrutinizer</Button>
                <Button bg={'teal.600'} color={'white'} onClick={() => { setAdminLevel('Councilor'); navigate('/login') }} variant={'solid'}>Councilor</Button>
                <Button bg={'teal.600'} color={'white'} onClick={() => { setAdminLevel('Examiner'); navigate('/login') }} variant={'solid'}>setAdminLevel</Button>
                <Button bg={'teal.600'} color={'white'} onClick={() => { setAdminLevel('Examiner'); navigate('/login') }} variant={'solid'}>Henlo</Button>
            </Flex>
        </Flex>
    )
}

export default AdminMembers