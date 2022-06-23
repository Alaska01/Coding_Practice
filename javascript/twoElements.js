// Comparing two elements in an array and finding the one with largest occurence or draw
arr = [1, 2, 1, 2, 2, 1, 2, 1, 2, 1, 2, 1]
function twoElements(arr) {

  let acc = [[], []]
  arr.forEach((elem, index, array) => {
    if (elem === array[0]) {
      acc[0].push(elem)
    } else {
      acc[1].push(elem)
    }
  })

  let selectedNumber, selectedNumberLength, draw;

  if (acc[0].length > acc[1].length) {
    selectedNumber = acc[0][0];
    selectedNumberLength = acc[0].length;
  } else if (acc[0].length === acc[1].length) {
    draw = 'draw'
  }
  else {
    selectedNumber = acc[1][0];
    selectedNumberLength = acc[1].length;
  }

  return (draw ? console.log(draw) : console.log(selectedNumber, selectedNumberLength))

}

twoElements(arr)