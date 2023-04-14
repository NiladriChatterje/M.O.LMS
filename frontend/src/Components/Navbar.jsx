import React from 'react'
import { Button, Flex, Text } from '@chakra-ui/react'
import { toast } from 'react-hot-toast'
const Navbar = () => {

    return (<>
        <Flex
            p={5}
            pos={'fixed'}
            top={0}
            justifyContent={'space-between'}
            w='full'
            h='max-content'
            bg={'rgba(25,25,25,0.7)'}>
            <Text fontWeight={900} color={'white'} fontSize={'3xl'}>M.O.sys</Text>
            <Button variant='solid' onClick={() => toast(`This Project was for the Purpose of secured management of student marks`)}>About</Button>
        </Flex>
    </>
    )
}

export default Navbar