

export default class Queue {

    private queue: string[] = []

    public push(item: string) {
        this.queue.push(item)
    }

    public pop() {
        return this.queue.shift()
    }

}