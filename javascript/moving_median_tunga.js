

function MovingMedian(arr) { 

  // code goes here  

  slidingMedianArray =[];

  firstElement = arr[0];
  remainingElements = arr.slice(1)
  let tempSort = []

  if(arr.length == 0){
    return 0;
  }

  if(remainingElements.length <= arr[0]){
    let result = remainingElements.sort(function(a, b){ return a -b})
    // console.log(result)
  }

  let tempArr =[]

  let j,k,l;
  let medianDecider = firstElement % 2;

  if(remainingElements.length > arr[0]){

    for(let i = 0; i < remainingElements.length; i++){
      j=i;
      k= j+ 1
      l = j +2

      if(l < remainingElements.length){
        tempArr = [remainingElements[j], remainingElements[k], remainingElements[l] ]
         
        // tempArr.sort((a, b)=> { return a-b})
        // console.log(tempArr)
        tempSort = tempArr
        tempSort.sort(function(a, b){
          return a -b;
        })

        if(medianDecider > 0 ){
          slidingMedianArray.push(tempSort[medianDecider])
        } 
        
        if (medianDecider == 0){

        }

        // console.log(tempSort)

        // console.log(tempArr)

        tempArr =[];

      }

       
    }

  }

  if(remainingElements.length < arr[0]){
  return  remainingElements.sort(function(a, b){
      return a -b;
    })
  }

  
 return slidingMedianArray
// console.log(remainingElements)


}
   
// keep this function call here 
console.log(MovingMedian([5, 2, 4, 6]));

 

