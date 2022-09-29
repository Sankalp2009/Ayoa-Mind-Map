/* eslint-disable no-unused-vars */
import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
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


export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
        <Image src="https://www.ayoa.com/wp-content/themes/droptaskreload/navigation/images/ayoa_bluenavlogo.svg" width="160px" height="50px" alt="Matrix"  />
        </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
            
              <Link  href="/">
              <Menu  id={1}>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  cursor={'pointer'}
                  minW={0}>
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
                  minW={0}>
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
                  minW={0}>
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
                  minW={0}>
                 <Text fontSize='md'>Pricing</Text>
                </MenuButton>
              </Menu>
             </Link>
          
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>


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
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}