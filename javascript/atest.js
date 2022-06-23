
let testdata = [[4, { a: 1 }], [5, { b: 5 }], [1, { c: 4 }], [5, { b: 5 }], [2, { b: 5 }]]
let getdata = testdata.sort(function (a, b) { return a - b })

console.log(getdata)