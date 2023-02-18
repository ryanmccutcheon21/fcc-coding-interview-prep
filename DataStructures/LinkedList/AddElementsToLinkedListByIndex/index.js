class LinkedList {
    #length = 0;
    #head = null;

    constructor() {
        class Node {
            constructor(element) {
                this.element = element;
                this.next = null;
            }
        }
        this.size = () => {
            return this.#length;
        };

        this.head = () => {
            return this.#head;
        };

        this.add = (element) => {
            const node = new Node(element);
            if (this.#head === null) {
                this.#head = node;
            } else {
                let currentNode = this.#head;

                while (currentNode.next) {
                    currentNode = currentNode.next;
                }

                currentNode.next = node;
            }
            this.#length++;
        };

        this.addAt = (index, element) => {
            if (index < 0 || index > this.#length) {
                return false;
            }

            const newNode = new Node(element);

            if (index === 0) {
                newNode.next = this.#head;
                this.#head = newNode;
            } else {
                let currentNode = this.#head;
                let i = 0;

                while (i < index - 1) {
                    currentNode = currentNode.next;
                    i++;
                }

                newNode.next = currentNode.next;
                currentNode.next = newNode;
            }

            this.#length++;
        };
    }
}