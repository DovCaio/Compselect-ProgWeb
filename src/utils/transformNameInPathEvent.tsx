

export default function transformNameInPathEvent(name: string){
    return name.replaceAll(" ", "-").toLocaleLowerCase()
}