import React, { useContext } from 'react';
import { Flex, Button } from '@chakra-ui/react';
import { Context } from '../App';
import { useNavigate } from 'react-router-dom';


const Adminmenbers = ['Examiner', 'Scrutinizer', 'Head Examiner', 'Tabulator', 'Councilor'];
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
                {Adminmenbers?.map(item => <Button bg={'green.600'} color={'white'} boxShadow={'1px 1px 20px -5px green'}
                    onClick={() => { setAdminLevel(item); navigate('/login') }} variant={'solid'}>{item}</Button>)}
            </Flex>
        </Flex>
    )
}

export default AdminMembers