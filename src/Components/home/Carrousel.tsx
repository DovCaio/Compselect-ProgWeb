"use client"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BookBox from '../BookBox';
import GenericBook from "@/assets/images/simplebook.webp"
import Book1 from "@/assets/images/livroenvelhecido.webp"
import Book2 from "@/assets/images/livro2.webp"
export default function Carrousel(){

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <div className='carosel-home'
        >
            <Carousel responsive={responsive} 
            swipeable={true}
            draggable={true}
            infinite={true} 
            removeArrowOnDeviceType={["tablet", "mobile"]}
            >
              
              <BookBox img={Book1}  name="Sombras do Amanhã" description="Em um futuro distópico onde a humanidade vive nas sombras de megacidades decadentes, um grupo de rebeldes descobre segredos sombrios sobre o governo autoritário que domina o mundo. Entre intrigas políticas e avanços tecnológicos, eles lutam por liberdade, enfrentando dilemas morais e desafios pessoais."/>
            
              <BookBox img={GenericBook} name="O Guardião dos Segredos Perdidos" description="Quando o jovem arqueólogo Lucas desvenda uma civilização perdida, ele se vê envolvido em uma trama milenar que conecta o passado ao presente. Uma jornada por mistérios ocultos, artefatos poderosos e sociedades secretas que guardam o futuro da humanidade."/>
              
              <BookBox img={GenericBook} name="Horizontes Inexplorados" description="Uma nave espacial parte em uma missão de exploração para além dos limites conhecidos do universo. A tripulação, composta por cientistas e aventureiros, enfrenta perigos desconhecidos e descobre que o vazio do espaço guarda não apenas novas formas de vida, mas também enigmas que desafiam a própria realidade."/>
              
              <BookBox img={GenericBook} name="As Cartas de Eveline" description="Durante a Segunda Guerra Mundial, Eveline escreve cartas para seu marido, um soldado na linha de frente. Décadas depois, suas netas encontram essas cartas e, ao lê-las, descobrem segredos sobre a vida de Eveline e as decisões difíceis que ela teve que tomar durante um dos períodos mais sombrios da história."/>
              
            </Carousel>   

        </div>
        
    )

}