import {
  Box,
  Button,
  Center,
  Container,
  Image,
  ListItem,
  UnorderedList,
  useMediaQuery,
} from "@chakra-ui/react";

import { useState } from "react";
import { Slider, Header, Slide, SliderProps} from "../components"
const Home = () => {
  // passar para o backend
  const [image, setImage] = useState([
    "https://conteudo.imguol.com.br/c/entretenimento/eb/2022/03/23/cachorro-da-raca-lulu-da-pomeramia-1648065976007_v2_900x506.jpg",
    "https://s2.glbimg.com/_bDnKvOpodO6FkZL8zJ0BFDtyAA=/e.glbimg.com/og/ed/f/original/2020/10/30/jamie-street-utre5dcgeyg-unsplash.jpg",
    "https://meupet.elanco.com/sites/g/files/adhwdz661/files/styles/paragraph_image/public/2020-03/comportamento-gato-cinza-sentado.jpg?itok=oML127nf",
    "https://static1.patasdacasa.com.br/articles/7/44/7/@/1498-algumas-racas-de-cachorro-sao-mais-indep-opengraph_1200-1.jpg",
    "https://www.petz.com.br/blog/wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg",
  ]);
  const [isWidth768] = useMediaQuery("(min-width:768px)");
  
 
  const settings = {
    spaceBetween: 50,
    slidesPerview: image.length < 3 ? image.length: 3,
    navigation: isWidth768 && image.length>= 3 ,
    draggable: image.length >=3,
    loop: image.length >= 3,
    pagination:image.length >= 3 && {
      clickable: true,
    },
  };

  return (
    <>
      <Header />
      {isWidth768 ? (
        <>
          <main>
            <Container
              mt="20px"
              fontFamily="sans-serif"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <>
                  <Center >
                    <Box  w="100vw" maxWidth='1280px'>
                      <Slider settings={settings}>
                        <UnorderedList h="200px"listStyleType="none">
                        {image.map((item) => (
                        <Slide key={item}>
                            <Image h="400px"w="100vw" src={item} alt={item} />
                        </Slide>
                        ))}
                        </UnorderedList>
                      </Slider>
                    </Box>
                   
                  </Center>
              </>
              <section>
                <article>
                  <p>Essa é a Pagina principal do site</p>
                </article>
              </section>
            </Container>
          </main>
          <footer>
            <Container>
              <h4>Yasmin Martins de Brito</h4>
            </Container>
          </footer>
        </>
      ) : (
        <>
          <main>
            <Box ml="90px">
            <>
            <Center >
                    <Box  w="90vw" maxWidth='1280px'>
                      <Slider settings={settings}>
                        <UnorderedList listStyleType="none">
                        {image.map((item) => (
                        <Slide key={item}>
                            <Image h="300px"w="90vw" src={item} alt={item} />
                        </Slide>
                        ))}
                        </UnorderedList>
                      </Slider>
                    </Box>
                   
                  </Center>
              </>
              <section>
                <article>
                  <p>Essa é a Pagina principal do site</p>
                </article>
              </section>
            </Box>
          </main>
          <footer>
            <Box ml="85px">
              <h4>Yasmin Martins de Brito</h4>
            </Box>
          </footer>
        </>
      )}
    </>
  );
};

export default Home;
