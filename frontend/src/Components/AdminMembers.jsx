import React, { useContext } from 'react';
import { Flex, Button } from '@chakra-ui/react';
import { Context } from '../App';
import { useNavigate } from 'react-router-dom';


const AdminMembers = () => {

    const { setAdminLevel, Adminmembers } = useContext(Context);
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
                h={500} w={window.innerWidth > 1200 ? '30vw' : '80vw'}
                borderRadius={10}
                bg={'white'}>
                {Adminmembers?.map(item => <Button key={item.precedence} bg={'green.600'} color={'white'} boxShadow={'1px 1px 20px -5px green'}
                    onClick={() => { setAdminLevel(item); navigate('/login') }} variant={'solid'}>{item.name}</Button>)}
            </Flex>
        </Flex>
    )
}

export default AdminMembers;