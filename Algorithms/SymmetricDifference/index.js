const diff = (arr1, arr2) => [
    ...arr1.filter(e => !arr2.includes(e)),
    ...arr2.filter(e => !arr1.includes(e))
]

const sym = (...args) => [...new Set(args.reduce(diff))]

sym([1, 2, 3], [5, 2, 1, 4])