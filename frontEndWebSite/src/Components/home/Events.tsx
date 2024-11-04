import EventsTable from "./EventsTable";

export default function Events(){
    const events = [
        {
          name: "Noite de Autógrafos: As Estrelas e o Destino",
          date: "2024-10-12",
          localization: "Livraria Literária Central, São Paulo, SP",
          description: "Evento de lançamento do livro As Estrelas e o Destino, com a presença da autora Clara Souza para uma sessão de autógrafos e uma breve leitura do primeiro capítulo.",
          link: "/events/noite-autografos-as-estrelas-e-o-destino"
        },
        {
          name: "Feira Internacional do Livro de Porto Alegre 2024",
          date: "2024-11-22",
          localization: "Centro Cultural Usina do Gasômetro, Porto Alegre, RS",
          description: "A maior feira de livros da região sul, com diversos estandes de editoras, palestras, sessões de autógrafos e workshops de escrita criativa.",
          link: "/events/feira-internacional-livro-poa-2024"
        },
        {
          name: "Sarau Sob as Estrelas",
          date: "2024-09-30",
          localization: "Espaço Cultural Céu Aberto, Rio de Janeiro, RJ",
          description: "Uma noite mágica de leitura de poesias e contos, com autores convidados e microfone aberto para o público. Um ambiente descontraído e poético sob o céu noturno.",
          link: "events/sarau-sob-as-estrelas"
        },
        {
          name: "Encontro Literário: O Mar Invisível",
          date: "2024-10-05",
          localization: "Café Literário Página 7, Belo Horizonte, MG",
          description: "Encontro mensal do Clube de Leitura da editora, com debate sobre o livro O Mar Invisível. O autor estará presente para discutir a obra com os leitores.",
          link: "/events/clube-leitura-o-mar-invisivel"
        },
        {
          name: "Oficina de Escrita: Construindo Mundos Fantásticos",
          date: "2024-10-18",
          localization: "Espaço Cultural Escrita Viva, Curitiba, PR",
          description: "Workshop intensivo de dois dias sobre criação de universos de fantasia, conduzido pelo escritor Rafael Cardoso. Ideal para quem deseja aprimorar suas técnicas de worldbuilding.",
          link: "/events/workshop-construindo-mundos-fantasticos"
        },
        {
          name: "Conferência Nacional do Mercado Editorial 2024",
          date: "2024-11-14",
          localization: "Centro de Convenções Anhembi, São Paulo, SP",
          description: "Conferência anual para profissionais da área editorial, com palestras e painéis discutindo as novas tendências e desafios do setor, além de networking entre editores e autores.",
          link: "/events/conferencia-nacional-mercado-editorial-2024"
        }
      ];
      
    return (

        <div className="event">
            <h2>Proximos eventos</h2>

            <EventsTable events={events}/>
        </div>

    )

}