class Set {
    constructor() {
        this.dictionary = {};
        this.length = 0;
    }

    has(element) {
        return this.dictionary[element] !== undefined;
    }

    values() {
        return Object.keys(this.dictionary);
    }

    add(element) {
        if (!this.has(element)) {
            this.dictionary[element] = true;
            this.length++;
            return true;
        }

        return false;
    }

    remove(element) {
        if (this.has(element)) {
            delete this.dictionary[element];
            this.length--;
            return true;
        }

        return false;
    }

    size() {
        return this.length;
    }

    union(set) {
        const newSet = new Set();
        this.values().forEach(value => {
            newSet.add(value);
        })
        set.values().forEach(value => {
            newSet.add(value);
        })

        return newSet;
    }

    intersection(set) {
        const newSet = new Set();
        this.values().forEach(value => {
            if (set.values().includes(value))
                newSet.add(value);
        })

        return newSet;
    }

    difference(set) {
        const newSet = new Set();
        this.values().forEach(value => {
            if (!set.values().includes(value))
                newSet.add(value);
        })

        return newSet;
    }

    isSubsetOf(set) {
        return this
            .values()
            .every(val => set.values().includes(val));
    }
}