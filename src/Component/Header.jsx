/* eslint-disable no-unused-vars */
import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  AvatarBadge,
  Text,
  MenuGroup,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Image } from '@chakra-ui/react';
import { Authcontext } from '../Context/AuthContextProvider';
import {useContext} from 'react'
export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {state} = useContext(Authcontext);

  return (
    <>
      <Box px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
      <Link href="/">
       <Image src="https://www.ayoa.com/wp-content/themes/droptaskreload/navigation/images/ayoa_bluenavlogo.svg" width="160px" height="50px" alt="Matrix"  />
      </Link> 
        </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
            
              <Link  href="/">
              <Menu  id={1}>
                <MenuButton
                 as={Button}
                 rounded={'full'}
                 cursor={'pointer'}
                 minW={0}
                 variant="ghost">
                Home
                </MenuButton>
              </Menu>
              </Link>

              
              <Link  href='/product'>
              <Menu isOpen={isOpen}  id={2}>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  cursor={'pointer'}
                  minW={0}
                  variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}>
               Products
                </MenuButton>
                <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
             <MenuItem>Ayoa Mind Map</MenuItem>
            <MenuItem>Ayoa Task</MenuItem>
            <MenuItem>Ayoa Ultimate</MenuItem>
            </MenuList>
              </Menu>
              </Link>

              
             <Link>
             <Menu id={3}>
                <MenuButton
                 as={Button}
                 rounded={'full'}
                 cursor={'pointer'}
                 minW={0}
                 variant="ghost">
                 NeuroDiversity
                </MenuButton>
                <MenuList>
               <MenuItem>DSA</MenuItem>
               <MenuItem>Software</MenuItem>
               <MenuItem>Workspace</MenuItem>
               <MenuItem>Education</MenuItem>
               </MenuList>
              </Menu>
             </Link>


             <Link>
             <Menu  id={4}>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  cursor={'pointer'}
                  minW={0}
                  variant="ghost">
                 <Text fontSize='md'>Resources</Text>
                </MenuButton>
                <MenuList>
               <MenuItem>Ayoa Blog</MenuItem>
               <MenuItem>Press & Articles</MenuItem>
               <MenuItem>Keynote Speaker</MenuItem>
               <MenuItem>Our Partners</MenuItem>
               <MenuItem>Help Center</MenuItem>
               </MenuList>
              </Menu>
             </Link>


             <Link>
              <Menu  id={5}>
                <MenuButton
                 as={Button}
                 rounded={'full'}
                 cursor={'pointer'}
                 minW={0}
                 variant="ghost">
                 <Text fontSize='md'>Pricing</Text>
                </MenuButton>
              </Menu>
             </Link>
          
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

            { state && state.token ?
               
        //       <Menu  id={6}>
        //      <MenuButton 
        //    as={Button}
        //    colorScheme='teal' 
        //    transition='all 0.2s'
        //    borderRadius='md'
        //    borderWidth='1px'
        //    _hover={{ bg: 'gray.500' }}
        //    _expanded={{ bg: 'blue.400' }}
        //    _focus={{ boxShadow: 'outline' }}>
        //    UserProfile
        //  </MenuButton>
        //  </Menu>
        <Avatar name='Kent Dodds' src='https://lh3.googleusercontent.com/iow_V9M-7lmw82mgk3rQ_BSu9fYltNeGRp1XKHrDoGmlH9LvG8C2iuYIhZDajD8jGKsoA5-fHNP9DI_Y9lOMkwR6r6VEvr9tIAeTwtrLCv2vSTKuHjUXad0gWkVjs9e38B1N_gmcduxo1I3mhji5kduwRPCPuc30lhQYtYPI8qnQoKwggcL9ZtUd_1MAuNWw1kWflgHkT84lua7U4AsqstLmJEOBjziQSxt96U4xodwh1i8lLDxG6-MfWLatgJS8yFNMC6-V-jp7AhmSDT3A7dJj_c_86s5ElwK5SOVHRMzzC2FWZe5ZVRCPtUllSuaHWXg5r_XNKo1-CiGZFydigx7UJMqoZAG5mWJI67C_ycQ_mJO2hwF69nxKbhekipfrnzGzYiDQD9O41tEOP_D1tHRN8fYVCp7qBvs4UX4zLtWVUXvVst3v6ItTUB9dPSdq22duTKETUy05YtlMb9NTmLBitmloI6i8G68EIGwidndtuRgcYo4t0Eh0-AXXD6TKT2xrwd3iHVDgi9FyOvwL3qY7qOhCOCZTliZUjAjh54YvlWxpWtuKH9L6U65kgqrjVdenkZcw9Wj1HbQXev2vhcEom5lnyLNjpSQdSoTHX56VstyrzLyPNFd4p7nhEtcuPehMaf3JT0dnRDOvefrLDP3icvpmqnWV0BaaR-1-2nnDCS8t-V3g257AUy01ZujE9QECXzj3dPhxo61FET01ix9U8Eow7zmuO2zllyyK0sZ7VKK-wvNR4sY6E4o7XyR9gEXYEufSWo6FhULDgXTwQEmQ9Ve-7rfFVADOuB2whjLBmkfNRWFmLp2bTiSGAJV37_5CmM4evebbSF8Mc6o9EqJgGq8iRBwqN25xkIN-OnkVYx5LffC9ES3mleyXLaBfR12_FAhgaCG9H9N3AcJ7_x9vocPAQjAjLKSFy-60=w670-h893-no?authuser=0'>
        <AvatarBadge boxSize='1.25em' bg='green.500' />
      </Avatar>
         :
         <Link href='/login'>
               <Menu  id={6}>
         <MenuButton 
           as={Button}
           colorScheme='teal' 
           transition='all 0.2s'
           borderRadius='md'
           borderWidth='1px'
           _hover={{ bg: 'gray.500' }}
           _expanded={{ bg: 'blue.400' }}
           _focus={{ boxShadow: 'outline' }}>
           Log in
         </MenuButton>
         </Menu>
         </Link>
            }

            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}