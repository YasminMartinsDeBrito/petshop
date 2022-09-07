import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  Image,
  Input,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Header } from "../components";
import filhote from "../assets/img/filhote.png";

const Endereco = () => {
  return (
    <>
      <Header />
      <main>
        <Box h="100vh" w="100vw" background="#fff">
          <Center
            margin="0 auto"
            maxWidth="1280px"
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
          >
            <Container w="50%" h="100vh">
              <Image
                src={filhote}
                alt="cachorro"
                zIndex="5"
                position="relative"
                m="0 auto"
              />
              <FormControl
                mt="-97px"
                pl="10px"
                pt="60px"
                h="560px"
                border="#000 solid 2px"
                borderRadius="8px"
                position="relative"
                display="flex"
                flexDirection="column"
                alignItems="center"
                background="#f95555"
              >
                <FormLabel color="#fff" fontWeight="bold" textAlign="center">
                  CEP:
                  <Input placeholder="Digite aqui" />
                </FormLabel>
                <FormLabel color="#fff" fontWeight="bold" textAlign="center">
                  Rua:
                  <Input placeholder="Digite aqui" />
                </FormLabel>

                <FormLabel color="#fff" fontWeight="bold" textAlign="center">
                  Bairro:
                  <Input placeholder="Digite aqui" />
                </FormLabel>

                <FormLabel color="#fff" fontWeight="bold" textAlign="center">
                  Cidade:
                  <Input placeholder="Digite aqui" />
                </FormLabel>

                <FormLabel color="#fff" fontWeight="bold" textAlign="center">
                  Estado:
                  <Input placeholder="Digite aqui" />
                </FormLabel>

                <FormLabel color="#fff" fontWeight="bold" textAlign="center">
                  Numero:
                  <Input placeholder="Digite aqui" />
                </FormLabel>

                <Box>
                    <Button color="#f95555" mr='10px'>
                        <Link to="/login">Login</Link>
                    </Button>

                    <Button color="#f95555" ml='10px'>
                        <Link to="/cadastrar">Voltar</Link>
                    </Button>

                </Box>

              </FormControl>
            </Container>
          </Center>
        </Box>
      </main>
    </>
  );
};
export default Endereco;
