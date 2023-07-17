import React, { useContext } from 'react';
import { Flex, Button } from '@chakra-ui/react';
import { Context } from '../App';
import { useNavigate } from 'react-router-dom';


const AdminMembers = () => {

    const { setAdminLevel, Adminmembers } = useContext(Context);
    const navigate = useNavigate();

    return (
        <Flex h={'100vh'}
            w={'full'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Flex
                p={5}
                boxShadow={'-2px 3px 14px -8px black'}
                flexDir={'column'}
                justifyContent={'space-between'}
                alignItems={'center'}
                h={500} w={window.innerWidth > 1200 ? '30vw' : '80vw'}
                borderRadius={20}
                bg={'white'}>
                {Adminmembers?.map((item, i) => <Button key={item.precedence}
                    bg={'blue.900'} color={'white'} boxShadow={'1px 1px 10px -5px green'}
                    onClick={() => { setAdminLevel(item); navigate('/login') }} variant={'solid'}>{item.name}</Button>)}
            </Flex>
        </Flex>
    )
}

export default AdminMembers;