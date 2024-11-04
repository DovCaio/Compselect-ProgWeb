import AuthorBox from "./AuthorBox"

import Avatar1 from "@/assets/images/Avatar1.webp"
import Avatar2 from "@/assets/images/Avatar2.webp"

const authors = [
    {
        name: "Rafael Martins",
        img: Avatar1.src,
        biograpy: "Rafael Martins é um autor e professor com especialização em Ciência da Computação. Nascido em 1985, ele tem dedicado sua carreira ao ensino e à produção de materiais didáticos que facilitam o aprendizado de conceitos complexos de programação e sistemas computacionais. Com mais de 10 anos de experiência no ensino superior, Rafael é autor de diversos livros didáticos voltados para estudantes de graduação e técnicos, abordando temas como algoritmos, estruturas de dados e desenvolvimento de software. Suas obras são conhecidas pela clareza e pela aplicação prática, sendo adotadas em diversas instituições de ensino no Brasil.",
        linkForPublications: "https://www.linkedin.com"
    },
    {
        name: "Carla Mendes",
        img: Avatar2.src,
        biograpy: "Carla Mendes, natural de Belo Horizonte, é uma educadora e escritora especializada em computação. Com uma carreira sólida na área acadêmica, Carla é formada em Engenharia de Computação e possui mestrado em Educação Tecnológica. Ela é autora de uma série de livros didáticos amplamente utilizados no ensino básico e fundamental, com o objetivo de promover o pensamento computacional desde as primeiras etapas da educação. Seu trabalho é reconhecido pela abordagem inovadora, que simplifica tópicos como lógica de programação e robótica educativa, tornando-os acessíveis para crianças e jovens. Carla também é palestrante em eventos educacionais, defendendo a inclusão da computação nos currículos escolares.",
        linkForPublications: "https://www.linkedin.com"
    },
    {
        name: "Pedro Fernandes",
        img: Avatar1.src,
        biograpy: "Pedro Fernandes é um escritor e especialista em ensino de computação, com ênfase em desenvolvimento de sistemas e inteligência artificial. Nascido em 1978, Pedro tem uma vasta experiência na criação de materiais didáticos voltados para o ensino técnico e universitário, com foco em tecnologias emergentes. Formado em Ciência da Computação, ele combina seu conhecimento acadêmico com a prática da indústria para escrever livros que conectam teoria e prática de maneira eficiente. Seus trabalhos abrangem áreas como machine learning, big data e segurança da informação, sendo adotados por cursos de tecnologia em todo o país. Pedro também atua como consultor educacional para instituições que desenvolvem currículos de computação.",
        linkForPublications: "https://www.linkedin.com"
    }
]

/*
      {
        name: "Clean Code in Python",
        description: "Seguindo os princípios de 'Clean Code', este livro foca em boas práticas de programação usando Python. Inclui exemplos práticos de refatoração, testes e arquitetura limpa.",
        type: "Programação",
        author: "Carla Mendes",
        agePublication: 2018
      },
      {      {
        name: "Advanced Data Structures for Optimization",
        description: "Um livro avançado para desenvolvedores que buscam implementar estruturas de dados para resolver problemas de otimização. Focado em técnicas para melhorar a eficiência de algoritmos.",
        type: "Algoritmos e Estruturas de Dados",
        author: "Pedro Fernandes",
        agePublication: 2010
      }
    ],
          {
        name: "Securing the Web: Modern Approaches",
        description: "Cobrindo práticas modernas de segurança para aplicações web, este livro aborda tópicos como HTTPS, OAuth2, autenticação multifator e mitigação de ataques como SQL Injection e XSS.",
        type: "Segurança da Informação e Criptografia",
        author: "Rafael Martins",
        agePublication: 2012
      },

*/ 

export default function AuthorEmphasis()  {

    return (

        <section className="author-emphasis">

                <h2>Autores de Destaque</h2>

                <section>
                    {
                        authors.map((author, index) => {
                            return <AuthorBox key={index} name={author.name} img={author.img} biograpy={author.biograpy} linkForPublications={author.linkForPublications} />
                        })
                    }
                </section>

        </section>
    )
}