# Question

# Given two sorted arrays arr1 and arr2 of passport numbers, implement a function findDuplicates that returns 
# an array of all passport numbers that are both in arr1 and arr2. 
# Note that the output array should be sorted in an ascending order.
# Let N and M be the lengths of arr1 and arr2, respectively. 
# Solve for two cases and analyze the time & space complexities of your 
# solutions: M ≈ N - the array lengths are approximately the same M ≫ N - arr2 is much bigger than arr1.


def find_duplicates(arr1, arr2)
    # your code goes here
    # let arr3 = []
    #   arr1.each do |x| 
    #      if(arr2.include(x))
    #        arr3 << x
    #   end
      
    #    return arr3.sort

    arr3 = [];
    arr1.each do |x|
      if(arr2.include?(x))
      arr3.push(x)
      end

    end
    
    return arr3
   
    
end
      
puts(find_duplicates([1, 2, 3, 5, 6, 7], [3, 6, 7, 8, 20]))

