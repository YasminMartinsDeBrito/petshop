import React from "react";
import {
  Box,
  Button,
  Heading,
  Image,
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
import { Link } from "react-router-dom";

const Header = () => {
  const [isWidth768] = useMediaQuery("(min-width:768px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cores = ["#f95555", "#fff", "#000"];
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      {isWidth768 ? (
        <Heading fontSize="1em">
          <Box
            color={cores[1]}
            display="flex"
            alignItems="center"
            justifyContent="space-around"
            h="50px"
            bg={cores[0]}
          >
            <UnorderedList
              w="100vw"
              listStyleType="none"
              display="flex"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <ListItem fontSize="25px">
                <Link to="/">Pet Shop Mimos Feliz</Link>
              </ListItem>

              <ListItem cursor="pointer" ml="10vw">
                <ListIcon as={FcAbout} />
                <Link to="/sobre">Sobre</Link>
              </ListItem>

              <ListItem cursor="pointer" ml="10vw">
                <ListIcon as={BsImages} />
                <Link to="/fotos">Fotos</Link>
              </ListItem>

              <ListItem cursor="pointer" ml="10vw">
                <Box display="flex" onClick={onOpen} ref={finalRef}>
                  <ListIcon as={BiLogIn} />
                  <Text>Acessar</Text>
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
                m="40px 10px 0 60vw"
                display="flex"
                justifyContent="flex-end"
                alignItems="center"
                mt="100px"
                h="250px"
                w="250px"
                borderRadius="10px"
                backgroundColor={cores[0]}
              >
                <ModalCloseButton bg={cores[1]}>X</ModalCloseButton>
                <ModalBody pb={6}>
                  <UnorderedList mt="80px" listStyleType="none">
                    <ListItem ref={initialRef} mt="10px">
                      <Link to="/cadastrar">Cadastrar</Link>
                    </ListItem>
                    <ListItem>
                      <Button mt="10px">
                        <Link to="/login">Login</Link>
                      </Button>
                    </ListItem>
                  </UnorderedList>
                </ModalBody>
              </ModalContent>
            </Modal>
          </Box>
        </Heading>
      ) : (
        <Heading
          position="absolute"
          top="0"
          bottom="0"
          height="100vh"
          left="0"
          backgroundColor={cores[0]}
          width="80px"
        >
          <Box>
            <Image
              src=""
              alt=""
              w="50px"
              h="50px"
              borderRadius="50%"
              margin="15px 16px"
            />
            <Text
              position="relative"
              ml="10p"
              pl="10px"
              mt="20px"
              fontSize="20px"
            >
              <Link to="/">Pet Shop Mimos Feliz</Link>
            </Text>
          </Box>

          <UnorderedList
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <ListItem
              display="flex"
              flexDirection="row"
              justifyContent="center"
              position="relative"
              color={cores[1]}
              fontSize="14px"
              cursor="pointer"
              w="100px"
              p="10px"
              _hover={{ p: "10px", bg: "#fff", color: "#f95555" }}
              _active={{ p: "10px", bg: "#fff", color: "#f95555" }}
            >
              <Box _hover={{ bg: "#eee" }} _active={{ bg: "#eee" }}>
                <ListIcon
                  as={FcAbout}
                  position="relative"
                  w="70px"
                  h="40px"
                  t="20px"
                  textAlign="center"
                  pr="25px"
                />
                <Link to="/sobre">
                  <Text>Sobre</Text>
                </Link>
              </Box>
            </ListItem>

            <ListItem
              display="flex"
              flexDirection="row"
              justifyContent="center"
              position="relative"
              color={cores[1]}
              fontSize="14px"
              cursor="pointer"
              w="100px"
              p="10px"
              _hover={{ p: "10px", bg: "#fff", color: "#f95555" }}
              _active={{ p: "10px", bg: "#fff", color: "#f95555" }}
            >
              <Box _hover={{ bg: "#eee" }} _active={{ bg: "#eee" }}>
                <ListIcon
                  as={BsImages}
                  position="relative"
                  w="70px"
                  h="40px"
                  t="20px"
                  textAlign="center"
                  pr="25px"
                />
                <Link to="/fotos">
                  <Text>Fotos</Text>
                </Link>
              </Box>
            </ListItem>

            <ListItem
              display="flex"
              flexDirection="row"
              justifyContent="center"
              position="relative"
              color={cores[1]}
              fontSize="14px"
              cursor="pointer"
              w="100px"
              p="10px"
              _hover={{ p: "10px", bg: "#fff", color: "#f95555" }}
              _active={{ p: "10px", bg: "#fff", color: "#f95555" }}
            >
              <Box
                onClick={onOpen}
                ref={finalRef}
                _hover={{ bg: "#eee" }}
                _active={{ bg: "#eee" }}
              >
                <ListIcon
                  as={BiLogIn}
                  position="relative"
                  w="70px"
                  h="40px"
                  t="20px"
                  textAlign="center"
                  pr="25px"
                />
                <Text>Acessar</Text>
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
              m="40px 10vw"
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
              h="250px"
              w="250px"
              borderRadius="10px"
              backgroundColor={cores[0]}
            >
              <ModalCloseButton bg={cores[1]}>X</ModalCloseButton>
              <ModalBody pb={6}>
                <UnorderedList mt="80px" listStyleType="none">
                  <ListItem ref={initialRef} mt="10px">
                    <Link to="/cadastrar">Cadastrar</Link>
                  </ListItem>
                  <ListItem>
                    <Button mt="10px">
                      <Link to="/login">Login</Link>
                    </Button>
                  </ListItem>
                </UnorderedList>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Heading>
      )}
    </>
  );
};
export default Header;
