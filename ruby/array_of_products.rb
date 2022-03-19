=begin

Array of Array Products
Given an array of integers arr, you’re asked to calculate for each index i the product of all integers except the integer at that index (i.e. except arr[i]). Implement a function arrayOfArrayProducts that takes an array of integers and returns an array of the products.

Solve without using division and analyze your solution’s time and space complexities.

Examples:

input:  arr = [8, 10, 2]
output: [20, 16, 80] # by calculating: [10*2, 8*2, 8*10]

input:  arr = [2, 7, 3, 4]
output: [84, 24, 56, 42]


=end


def array_of_array_products(arr)
  
  # For each element of the array  
  output = []
  new_arr = arr.flatten
  
   if (arr.length === 1 || arr.length === 0 )
     return [];
   end
  
   if(arr.length === 2)
     return arr;
   end
  
   if (arr.length > 2)
      arr.each_with_index do |value, index|

         
          test_new_arr = new_arr.flatten;
          out2 = test_new_arr.delete_at(index)
          test2= test_new_arr.reduce(1) { |mul, num| mul * num };
          output.push(test2)


      end
     puts output
    end
  
end

(array_of_array_products([8, 10, 2]))