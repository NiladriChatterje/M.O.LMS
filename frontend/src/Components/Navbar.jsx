import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

const Navbar = () => {

    return (<>
        <Flex
            p={5}
            pos={'sticky'}
            top={0}
            zIndex={2}
            bg={'gray.50'}
            boxShadow={'1px 3px 15px -5px black'}
            justifyContent={'space-between'}
            w='full'
            h='max-content'>
            <Text fontWeight={900} fontSize={'3xl'}>M.S. LMS</Text>
        </Flex>
    </>
    )
}

export default Navbar