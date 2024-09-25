"use client"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BookBox from '../BookBox';
import GenericBook from "@/assets/images/simplebook.webp"
import Book1 from "@/assets/images/livroenvelhecido.webp"
import Book2 from "@/assets/images/book.webp"
import Book3 from "@/assets/images/livroComputacao.webp"
import Book4 from "@/assets/images/livroComputacao2.webp"
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
              
              <BookBox img={Book1}  
                name="Mastering Data Structures: A Practical Guide"
                description="Este livro apresenta uma abordagem prática para entender e implementar estruturas de dados essenciais, como listas encadeadas, pilhas, filas e árvores. Ao longo dos capítulos, o autor explora como otimizar algoritmos e melhorar a eficiência do código. É ideal tanto para estudantes quanto para desenvolvedores."
                type="Algoritmos e Estruturas de Dados"
                author="Lucas Moreira"
                agePublication="2019"
        />
            
              <BookBox img={Book2} 
                name="Building Secure Systems: Cybersecurity Fundamentals"
                description="Um guia abrangente que explora os conceitos fundamentais de segurança cibernética e criptografia. Desde os métodos de autenticação e criptografia simétrica até ataques avançados e segurança de rede, o livro cobre todos os aspectos essenciais para proteger sistemas digitais."
                type="Segurança da Informação e Criptografia"
                author="Carla Oliveira"
                agePublication="2004"
                />
              
              <BookBox img={Book3} 
                name="The Art of Java: Clean and Efficient Code"
                description="Neste livro, Miguel Duarte ensina como escrever código Java limpo, eficiente e escalável. Com base em sua experiência no desenvolvimento de grandes sistemas de software, o autor compartilha práticas recomendadas para a refatoração de código e design orientado a objetos."
                type="Programação"
                author="Miguel Duarte"
                agePublication="2000"
                />
              
              <BookBox img={Book4} 
              name="Modern Web Development with Next.js"
              description="Voltado para desenvolvedores que desejam criar aplicações web modernas, este livro apresenta um guia detalhado sobre como usar o Next.js para desenvolvimento full-stack. Júlia Santiago aborda renderização no lado do servidor, roteamento dinâmico e otimização de performance."
              type="Desenvolvimento Web"
              author="Júlia Santiago"
              agePublication="2015"
              />
              
            </Carousel>   

        </div>
        
    )

}