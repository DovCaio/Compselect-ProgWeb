

export default class Queue {

    private queue: string[] = []

    public push(item: string) {
        this.queue.push(item)
    }

    public pop() {
        if (this.queue.length > 0){
            return this.queue.shift()

        }
        return "" //NILL
    }

}