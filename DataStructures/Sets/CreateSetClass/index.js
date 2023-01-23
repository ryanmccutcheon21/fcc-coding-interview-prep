class Set {
    constructor() {
        // Dictionary will hold the items of our set
        this.dictionary = {};
        this.length = 0;
    }

    // This method will check for the presence of an element and return true or false
    has(element) {
        return this.dictionary[element] !== undefined;
    }

    // This method will return all the values in the set
    values() {
        return Object.values(this.dictionary);
    }

    // This method will add element to the set
    add(element) {
        if (!this.has(element)) {
            this.dictionary[element] = element;
            this.length++;
            return true;
        } else {
            return false;
        }
    }

    // This method will remove an element from the set
    remove(element) {
        if (this.has(element)) {
            delete this.dictionary[element]
            this.length--
            return true
        } else {
            return false
        }
    }

    // This method returns the length of the set
    size() {
        return this.length
    }
}