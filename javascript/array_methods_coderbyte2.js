/*
simply convert to base three from base ten i.e input 21, output = 110
This link is an expanation https://en.wikipedia.org/wiki/Ternary_numeral_system
*/

function mathsChallenge(num) {

  let remainder = []

  if (num < 3) {
    return remainder.push(num);
  }

  currentNum = num;
  let i = 0;

  while (i < num / 3) {
    if (currentNum % 3 == 0) {

      remainder.push(0)
      currentNum = currentNum / 3

    }

    if (currentNum % 3 != 0 && currentNum > 3) {
      remainder.push(currentNum % 3)
      currentNum = Math.floor((currentNum / 3))
    }

    if (currentNum < 3) {
      remainder.push(currentNum)
      break;
    }
    i++;
  }


  return remainder.reverse().join("");
}

console.log(mathsChallenge(21))