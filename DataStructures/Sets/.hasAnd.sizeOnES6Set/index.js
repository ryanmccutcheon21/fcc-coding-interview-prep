const checkSet = (arrToBeSet, checkValue) => {
    const set = new Set(arrToBeSet)
    return [set.has(checkValue), set.size]
}