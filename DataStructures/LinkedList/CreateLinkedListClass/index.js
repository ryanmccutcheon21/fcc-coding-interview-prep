function LinkedList() {
    let length = 0
    let head = null

    function Node(element) {
        this.element = element
        this.next = null
    }

    this.head = () => head

    this.size = () => length

    this.add = element => {
        const node = new Node(element)
        if (head) {
            let current = head
            while (current.next !== null) {
                current = current.next
            }
            current.next = node
        }
        else {
            head = node
        }
        length++
    }

    this.remove = element => {
        if (head.element === element) {
            head = head.next
            return length--
        }
        let previous = head
        while (previous) {
            let current = previous.next
            if (current) {
                if (current.element === element) {
                    previous.next = current.next
                    return length--
                }
            }
            previous = current
        }
    }
}