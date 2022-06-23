const arr =['King', 'Queen', 1, 2, 3, 'King', 'Queen', 4, 1, 3,10, 20, 'King', 'Queen']

let separation = arr.reduce((accumulator, currentValue)=>{
  if(typeof currentValue==='number'){
   return  accumulator + currentValue
  } else{ return}

}, [])

console.log(separation)