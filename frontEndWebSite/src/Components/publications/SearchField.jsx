import {  useEffect } from "react"
import SearchFieldStyle from "./SearchField.module.css"

const catalogedBooks = {
    "Algoritmos e Estruturas de Dados": [
      {
        name: "Data Structures Unlocked",
        description: "Um guia simples para iniciantes entenderem os princípios básicos de estruturas de dados, como arrays, listas e árvores. Explica conceitos fundamentais com exemplos práticos de implementação em várias linguagens.",
        type: "Algoritmos e Estruturas de Dados",
        author: "Ana Pereira",
        agePublication: 2000
      },
      {
        name: "Algorithmic Thinking",
        description: "Focado no pensamento algorítmico, este livro ensina como quebrar problemas complexos em soluções otimizadas. Aborda algoritmos de ordenação, busca e algoritmos gulosos.",
        type: "Algoritmos e Estruturas de Dados",
        author: "João Silva",
        agePublication: 2004
      },
      {
        name: "Advanced Data Structures for Optimization",
        description: "Um livro avançado para desenvolvedores que buscam implementar estruturas de dados para resolver problemas de otimização. Focado em técnicas para melhorar a eficiência de algoritmos.",
        type: "Algoritmos e Estruturas de Dados",
        author: "Pedro Fernandes",
        agePublication: 2010
      }
    ],
    "Segurança da Informação e Criptografia": [
      {
        name: "Practical Cryptography in Action",
        description: "Um guia prático para desenvolvedores aprenderem a implementar criptografia de ponta a ponta, desde a criptografia simétrica até o uso de curvas elípticas.",
        type: "Segurança da Informação e Criptografia",
        author: "Fernanda Costa",
        agePublication: 1999
      },
      {
        name: "Securing the Web: Modern Approaches",
        description: "Cobrindo práticas modernas de segurança para aplicações web, este livro aborda tópicos como HTTPS, OAuth2, autenticação multifator e mitigação de ataques como SQL Injection e XSS.",
        type: "Segurança da Informação e Criptografia",
        author: "Rafael Martins",
        agePublication: 2012
      },
      {
        name: "Applied Cybersecurity for Enterprises",
        description: "Voltado para profissionais de segurança, este livro detalha como proteger sistemas de grandes empresas, com foco em gerenciamento de riscos e resposta a incidentes.",
        type: "Segurança da Informação e Criptografia",
        author: "Mariana Almeida",
        agePublication: 2020
      },
      {
        name: "Encryption for Privacy: A Beginner's Guide",
        description: "Um livro introdutório para quem deseja entender como a criptografia é usada para proteger a privacidade digital em aplicativos de mensagens e armazenamento de dados.",
        type: "Segurança da Informação e Criptografia",
        author: "José Rodrigues",
        agePublication: 1998
      }
    ],
    "Programação": [
      {
        name: "Clean Code in Python",
        description: "Seguindo os princípios de 'Clean Code', este livro foca em boas práticas de programação usando Python. Inclui exemplos práticos de refatoração, testes e arquitetura limpa.",
        type: "Programação",
        author: "Carla Mendes",
        agePublication: 2018
      },
      {
        name: "Functional Programming with JavaScript",
        description: "Uma introdução ao paradigma de programação funcional usando JavaScript. Ideal para desenvolvedores que querem adotar práticas modernas de programação com funções puras e imutabilidade.",
        type: "Programação",
        author: "Lucas Nascimento",
        agePublication: 2000
      },
      {
        name: "Mastering Java: From Basics to Advanced",
        description: "Um guia completo para aprender Java desde o básico até conceitos avançados como programação multithreading, sockets e desenvolvimento de aplicações empresariais.",
        type: "Programação",
        author: "André Couto",
        agePublication: 2000
      },
      {
        name: "Coding Best Practices: Writing Maintainable Software",
        description: "Este livro explora as melhores práticas para escrever código que seja legível, sustentável e fácil de manter, independentemente da linguagem de programação usada.",
        type: "Programação",
        author: "Fernanda Torres",
        agePublication: 2003
      }
    ],
    "Desenvolvimento Web": [
      {
        name: "Full-Stack Web Development with React and Node.js",
        description: "Um guia para desenvolver aplicações full-stack usando React no front-end e Node.js no back-end. Abrange desde a criação de APIs RESTful até o desenvolvimento de interfaces interativas.",
        type: "Desenvolvimento Web",
        author: "Júlio Mendes",
        agePublication: 2016
      },
      {
        name: "CSS Mastery: Advanced Web Styling Techniques",
        description: "Este livro mergulha em técnicas avançadas de CSS, incluindo flexbox, grid, animações e boas práticas para criar layouts responsivos e modernos.",
        type: "Desenvolvimento Web",
        author: "Laura Ribeiro",
        agePublication: 2001
      },
      {
        name: "Next.js: Building Scalable Web Apps",
        description: "Uma introdução prática ao framework Next.js, cobrindo renderização no lado do servidor, rotas dinâmicas e otimização de performance para grandes aplicações web.",
        type: "Desenvolvimento Web",
        author: "Ricardo Teixeira",
        agePublication: 2002
      },
      {
        name: "Progressive Web Apps with Vue.js",
        description: "Ensina a criar aplicativos web progressivos usando Vue.js, com foco em performance, armazenamento offline e melhores práticas para entregar experiências de qualidade em dispositivos móveis.",
        type: "Desenvolvimento Web",
        author: "Paula Santana",
        agePublication: 1995
      }
    ]
  };
  

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SearchField({setBooks}){


    useEffect(() => {


      setBooks(catalogedBooks)


    }, [])

    function searchBooks(e){
        const searchValue = e.target.value

        if (searchValue === ""){

            setBooks(catalogedBooks)

        }else{

            const newBooks = {

                "Encontrados" : 
                    [

                    ]

                

            }


            Object.entries(catalogedBooks).forEach(item => {
                item[1].forEach(b => {

                    if(b.name.toLocaleLowerCase().indexOf(searchValue.toLocaleLowerCase()) > -1 ||
                      b.author.toLocaleLowerCase().indexOf(searchValue.toLocaleLowerCase()) > -1 ||
                      b.type.toLocaleLowerCase().indexOf(searchValue.toLocaleLowerCase()) > -1 ||
                      b.agePublication === parseInt(searchValue)
                  ){
                      newBooks["Encontrados"].push(b)
                    }

                })
                
            })

            setBooks(newBooks);
        }



      
    }
    

    return (

        <div className={SearchFieldStyle.searchfield}>

            <div>
                <label htmlFor="search">Pesquisar: </label>
                <input type="text" name="search" id="search" onChange={e => searchBooks(e)}/>

            </div>

        </div>

    )
}
