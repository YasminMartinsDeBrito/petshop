import {
  Box,
  Button,
  Container,
  Image,
  ListItem,
  UnorderedList,
  useMediaQuery,
} from "@chakra-ui/react";

import { useState } from "react";
import { SwiperSlide } from "swiper/react";
import Header from "../components/Header";
import Slider from "../components/Slider";
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
    spaceBetween:50,
    slidesPerview: 3,
    navigation:true,
    // pagination: {
    //   click
    // }
  }


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
                  <Box>
                    <UnorderedList listStyleType="none">
                        {image.map((item) => (
                          <Box
                            key={item}                            
                          >
                            <Image src={item} alt={item} />
                          </Box>
                        ))}
                    </UnorderedList>
                  <Container>
                    <Slider settings={settings}>
                      <SwiperSlide>
                        <h1>teste1</h1>
                      </SwiperSlide>
                      <SwiperSlide>
                        <h1>teste2</h1>
                      </SwiperSlide>
                      <SwiperSlide>
                        <h1>teste3</h1>
                      </SwiperSlide>
                    </Slider>
                  </Container>
                    

                  </Box>
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
            <Box ml="85px">
              <>
                <Box>
                  <UnorderedList display="flex" listStyleType="none">
                    {image.map((item) => (
                      <Box mt="20px">
                        <Image src={item} alt={item} />
                      </Box>
                    ))}
                  </UnorderedList>
                </Box>
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
