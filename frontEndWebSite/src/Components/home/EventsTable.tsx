"use client"
//import Link from "next/link"
import {Table, Button  } from "rsuite"
import {useRouter} from "next/navigation"
import "rsuite/Table/styles/index.css"
import "rsuite/Button/styles/index.css"

const {Column, HeaderCell, Cell} = Table

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function EventsTable({events}: any){

    const router = useRouter()

    const goToEvent = (link : string) => {
        router.push(link)
    }

    return (

        <Table 
            height={400}
            data={events}
            onRowClick={rowData => console.log(rowData)}
            >

            <Column width={300} align="center" fixed>
                <HeaderCell>Nome</HeaderCell>
                <Cell dataKey="name"/>
            </Column>
            <Column width={150}>
                <HeaderCell>Data</HeaderCell>
            <Cell dataKey="date" />
            </Column>

            <Column width={150}>
                <HeaderCell>Descrição</HeaderCell>
                <Cell dataKey="description" />
            </Column>

            <Column width={80} fixed="right">
                <HeaderCell>Ir para</HeaderCell>

                <Cell style={{ padding: '6px' }}>
                {rowData => (
                    <Button appearance="link" onClick={() =>   goToEvent(rowData.link)}>
                        Ir
                    </Button>
                )}
                </Cell>
            </Column>

        </Table>


    )


}