const pairwise = (arr, arg) => {
    const indices = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === arg) {
                indices.push(i, j)
                arr[i] = arr[j] = NaN
            }
        }
    }
    return indices.reduce((acc, val) => {
        return acc + val
    }, 0)
}

pairwise([1, 4, 2, 3, 0, 5], 7);