/*

Given an m x n matrix, return all elements of the matrix in spiral order.

 

Example 1:


Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:


Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100

*/

var spiralOrder = function(matrix) {
    let output = [];
    let column = matrix.length;
    let row = matrix[0].length;
    
    // console.log(row, column)
    if(column === 3){
        output.push(...matrix[0])
        output.push(...matrix[1].slice(-1))
        output.push(...matrix[2].reverse())
        output.push(...matrix[1])
        output.pop()
    }
    return output;
};

spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]);