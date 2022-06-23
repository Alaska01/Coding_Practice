// // interviewer: what will the following code output?
// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function() {
//     console.log('Index: ' + i + ', element: ' + arr[i]);
//   }, 3000);
// }

// // const arr = [10, 12, 15, 21];
// for (let i = 0; i < arr.length; i++) {
//   (function(arr, i) {
//       setTimeout(function() {
//           console.log('Index: ' + i + ', value: ' + arr[i]);
//       }, 3000);
//   })(arr, i);
// }


// // const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//   // pass in the variable i so that each function 
//   // has access to the correct index
//   setTimeout(function(i_local) {
//     return function() {
//       console.log('The index of this number is: ' + i_local);
//     }
//   }(i), 3000);
// }

const person = {
  name: 'Bobo',
  address: { street: 'Main Street', number: 123 }
};

const shallowPersonClone = { ...person };
shallowPersonClone.address.number = 456;

console.log({ person, shallowPersonClone });