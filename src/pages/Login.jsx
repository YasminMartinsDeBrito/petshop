import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";

import Header from "../components/Header";
import filhote from "../assets/img/filhote.png";
const Login = () => {
  return (
    <>
      <Header />
      <main>
        <Box h="100vh" w="100vw" background="#fff">
          <Text fontSize="30px" textAlign="center" p="30px">
            PetCheck
          </Text>
          <Center
            margin="0 auto"
            maxWidth="1280px"
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
          >
            <Container
              w="50%"
              h="100vh"
              borderRadius="20px"
              boxShadow="2px 1px 4px 2px"
              background="#f95555"
            >
              <Image
                src={filhote}
                alt="cachorro"
                zIndex="5"
                position="relative"
              />
              <FormControl
                mt="-96px"
                pl="10px"
                pt="60px"
                h="280px"
                border="#fff solid 2px"
                borderRadius="8px"
                position="relative"
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <FormLabel color="#fff" fontWeight="bold" textAlign="center">
                  Email:
                  <Input placeholder="Digite aqui" />
                </FormLabel>

                <FormLabel color="#fff" fontWeight="bold" textAlign="center">
                  Senha:
                  <Input placeholder="Digite aqui" />
                </FormLabel>
                <Button color="#f95555">Entrar</Button>
              </FormControl>
            </Container>
          </Center>
        </Box>
      </main>
    </>
  );
};
export default Login;
