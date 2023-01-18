const binarySearch = (searchList, value) => {
    let arrayPath = []
    //set initial L - M - R
    let left = 0
    let right = searchList.length - 1
    let middle = Math.floor(right / 2)

    //search for target value
    while (searchList[middle] !== value) {
        // add current value to output array
        arrayPath.push(searchList[middle])

        // check for value not found
        if (right < left) {
            return 'Value not found'
        }

        // value is in Left or Right portion of the array 
        // update L - M - R
        if (searchList[middle] > value) {
            right = middle - 1
            middle = left + Math.floor((right - left) / 2)
        } else {
            left = middle + 1
            middle = left + Math.floor((right - left) / 2)
        }
    }

    // add target value to output array
    arrayPath.push(searchList[middle])

    return arrayPath
}