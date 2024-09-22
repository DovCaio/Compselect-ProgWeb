import Link from "next/link"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function EventsTable({events}: any){

    return (

        <table>

            <thead>
                <tr>
                    <th>
                        Nome
                    </th>
                    <th>
                        Data
                    </th>
                    <th>
                        Descrição
                    </th>
                    <th>
                        Ir para
                    </th>
                </tr>
            </thead>

            <tbody>

                {events.map((event: {name: string, date:string, description:string, link:string}) => {

                        return (
                            <tr key={event.name}>
                                <td>{event.name}</td>
                                <td>{event.date}</td>
                                <td>{event.description}</td>
                                <td>
                                    <Link href={event.link}>
                                        Saiba mais
                                    </Link>
                                </td>
                            </tr>
                        )

                })}

            </tbody>

        </table>


    )


}