import { Notification, useToaster} from 'rsuite';
import "rsuite/Notification/styles/index.css"
import "rsuite/useToaster/styles/index.css"
import "rsuite/SelectPicker/styles/index.css"



/*

    Possiveis valores para type:
    info, success, warning, error

*/
export default function NotificationElement({type, mensage, header}) {
    const toaster = useToaster();
    
    const mensageElement = (
        <Notification type={type} header={header} closable>
                <p>{mensage}</p>
        </Notification>
    )

    /*
        Possíveis valores para placement:
        topStart, topCenter, topEnd, bottomStart, bottomCenter, bottomEnd
    */
    toaster.push(mensageElement, {placement: 'topCenter'})

    return (
        <></>
    )
}