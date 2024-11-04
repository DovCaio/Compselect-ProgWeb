export default function transformPathInName(path: string){
    return path.replaceAll("-", " ").split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
}