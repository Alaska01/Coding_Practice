function WordSplit(strArr) { 

  // code goes here  
  let result =[];

  let newArr = strArr.splice(',')

  let getTwoWords = newArr[0]

  let findTwoWords = newArr[1].split(',')

  let extractedWords = findTwoWords.map((word, index, arr)=>{

    condition= getTwoWords.startsWith(word)
    if(condition){
      return word
    }
  })

  let wordsToConsider = extractedWords.filter(word=>{
      if(word!== 'undefined'){
          return word
      } 
  })

  let wordsToConsiderLength =wordsToConsider.map((element, index, array) => { 
    return array[index].length
  })


  let checkWords = wordsToConsider.forEach((word, index)=>{

    let check = getTwoWords.split('')
    
    let firstWord = check.slice(0, wordsToConsiderLength[index])
    let secondWord =check.slice(wordsToConsiderLength[index])

    let finalFirstWord =firstWord.join('')
    let finalSecondWord = secondWord.join('')
  
    if(findTwoWords.includes(finalFirstWord) && findTwoWords.includes(finalSecondWord)){
      result.push(finalFirstWord)
      result.push(finalSecondWord)
    }
    
    
  })

  return result.toString()  

}
   
// keep this function call here 
console.log(WordSplit(["baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"]));