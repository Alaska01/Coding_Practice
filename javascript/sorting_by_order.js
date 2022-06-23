const arr =['King', 'Queen', 1, 2, 3, 'King', 'Queen', 4, 1, 3,10, 20, 'King', 'Queen']

function selection(arr) {
const numArr =  [];
const nameArr = []
 arr.map(function(element, index, array){
    if(typeof array[index]==='number'){
     return numArr.push(element)
    } 
    
    if(typeof array[index] ==='string') {
     return  nameArr.push(element)
    }
  })

  const queenArr = [];
  const kingArr = [];
  sortedNumArr = numArr.sort((a, b)=>{ return a -b})

  nameArr.map(function(element, index, array){
    if(element === "Queen"){
      return queenArr.push(element)
    }

    if(element=== "King"){
      return kingArr.push(element)
    }
  })
 

  return [...sortedNumArr, ...queenArr, ...kingArr]
}


console.log(selection(arr))