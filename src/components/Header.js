import React from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  ListIcon,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  UnorderedList,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { FcAbout } from "react-icons/fc";
import { BsImages } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";


const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isWidth768] = useMediaQuery('(min-width:768px)')
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
    {isWidth768 ? 
    <Heading fontSize='1em'>
      <Box
        color="#fff"
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        h="50px"
        bg="#f95555"
      >
        <UnorderedList
          w="100vw"
          listStyleType="none"
          display="flex"
          justifyContent="space-evenly"
          alignItems='center'
        >
          <ListItem fontSize="25px">Pet Shop Mimos Feliz</ListItem>

          <ListItem ml="10vw">
            <ListIcon as={FcAbout} />
            Sobre
          </ListItem>

          <ListItem ml="10vw">
            <ListIcon as={BsImages} />
            Fotos
          </ListItem>

          <ListItem ml="10vw">
            <Box onClick={onOpen} ref={finalRef}>
              <ListIcon as={BiLogIn} />
              Acessar
            </Box>
          </ListItem>
        </UnorderedList>

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent
            m="40px 10px"
            display="flex"
            justifyContent='flex-end'
            alignItems="center"
            mt="100px"
            h="300px"
            w="300px"
            borderRadius="10px"
            backgroundColor="#f95555"
          >
            <ModalCloseButton bg="#fff">X</ModalCloseButton>
            <ModalBody pb={6}>
              <UnorderedList mt='40px' listStyleType='none'>
                <ListItem ref={initialRef}>Cadastrar</ListItem>
                <ListItem>
                  <Button>Login</Button></ListItem>
              </UnorderedList>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </Heading>
    :
      <>
      <h1>Ola</h1>
      </>
    }
  </>
  );
};
export default Header;
