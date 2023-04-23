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
            <Text fontWeight={900} color={'white'} fontSize={'3xl'}>Student Marks Portal</Text>
            <Button variant='solid' bg={'red.400'} boxShadow={'1px 1px 20px -2px red'} color={'white'}
                onClick={() => toast(`This Project was for the Purpose of secured management of student marks`)}>About</Button>
        </Flex>
    </>
    )
}

export default Navbar