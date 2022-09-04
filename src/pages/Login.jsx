import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Image,
  Input,
} from "@chakra-ui/react";
import Header from "../components/Header";
import cachorro from '../assets/img/cachorro2.jpg'
const Login = () => {
  return (
    <>
      <Header />
      <h1>Login</h1>
      <main>
        <Container>
          <Box>
            {/* <Image src={cachorro} alt="cachorro" /> */}
          </Box>
          <FormControl boxShadow='2px 1px 4px 2px' borderRadius='8px' p='5px' h='300px' backgroundRepeat={"no-repeat"} backgroundSize={"cover"} backgroundImage={cachorro}>
            <FormLabel>
              Email:
              <Input placeholder="Digite aqui" />
            </FormLabel>

            <FormLabel>
              Senha:
              <Input placeholder="Digite aqui" />
            </FormLabel>
          </FormControl>
        </Container>
      </main>
    </>
  );
};
export default Login;
