//  Use Sets Methos or this method
let  unique = (value, index, self) => {
    return self.indexOf(value) === index
  }
  
  const ages = [26, 27, 26, 26, 28, 28, 29, 29, 30]
  const uniqueAges = ages.filter(unique)
  
  console.log(uniqueAges)

  const intersection = new Set([...ages])
  console.log(intersection)

//    Convert set to Array

let conversionSetsToArray = Array.from(intersection);
console.log(conversionSetsToArray)