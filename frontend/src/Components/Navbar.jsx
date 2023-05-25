import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

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
        </Flex>
    </>
    )
}

export default Navbar