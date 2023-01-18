function Queue() {
    var collection = [];
    this.print = function () {
        console.log(collection);
    };
    this.enqueue = function (val) {
        return collection.push(val)
    }
    this.dequeue = function () {
        return collection.shift()
    }
    this.front = function () {
        return collection[0]
    }
    this.size = function () {
        return collection.length
    }
    this.isEmpty = function () {
        return collection.size > 0
    }
}