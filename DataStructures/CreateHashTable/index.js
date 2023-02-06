let called = 0

let hash = string => {
    called++
    let hashed = 0
    for (let i = 0; i < string.length; i++) {
        hashed += string.charCodeAt(i)
    }
    return hashed
}

let HashTable = function () {
    this.collection = {}

    this.add = (key, value) => {
        const hashedKey = hash(key)
        this.collection[hashedKey] = this.collection[hashedKey] || {}
        this.collection[hashedKey][key] = value
    }

    this.lookup = (key) => {
        const hashedKey = hash(key)
        return this.collection[hashedKey][key]
    }

    this.remove = (key) => {
        const hashedKey = hash(key)
        delete this.collection[hashedKey][key]
        if (Object.keys(this.collection[hashedKey]).length == 0)
            delete this.collection[hashedKey]
    }
}