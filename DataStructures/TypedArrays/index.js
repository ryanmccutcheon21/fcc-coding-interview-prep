// byteSize needs to be a multiple of element size in bytes for each type of array
// Int32Array elements use 4 bytes per element
const byteSize = 64
// create buffer to assign how much data you want the array to take up
const buffer = new ArrayBuffer(byteSize)
const i32View = new Int32Array(buffer)

buffer.byteLength // 64
i32View.byteLength // 64
console.log(i32View) // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]