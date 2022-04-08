
// Kindly go through the image folder and use the string challenge image to understand the question and possible solution
function StringChallenge(str){

  let arrStr =str.split('')

  let newArr = []
  let condition= arrStr.length % 3
  for(let i=0; i< arrStr.length; i++){

      for(let j =i +1; j < arrStr.length; j++){

          for(let k = i + 2; k < arrStr.length; k++){

              if(arrStr.length <=3){
                  if(arrStr[i] != arrStr[j]){

                    newArr.push(arrStr[k])
                  }
              }

              // console.log(arrStr % 3)
              if(arrStr.length > 3 && (condition) < 2){

                let sliceposition= arrStr % 3
                let tap = k +1
                if(arrStr[i] != arrStr[j]){

                  
                  newArr.push(arrStr[k])

                  i= i +1;
                }

                // break;

              }

          }

      }


  }

  return newArr

}

console.log(StringChallenge('abcabc'))