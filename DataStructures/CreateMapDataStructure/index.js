const Map = () => {
    this.collection = {}

    this.has = key => {
        return this.collection.hasOwnProperty(key)
    }
    this.add = (key, val) => {
        this.collection[key] = val
    }
    this.remove = key => {
        if (this.has(key)) {
            delete this.collection[key]
        }
    }
    this.get = key => {
        return this.has(key) ? this.collection[key] : undefined
    }
    this.values = () => {
        return [...Object.values(this.collection)]
    }
    this.size = () => {
        return Object.entries(this.collection).length
    }
    this.clear = () => {
        this.collection = {}
    }
}