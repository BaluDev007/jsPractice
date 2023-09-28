/*

Problem Description
You are given an array A of integers of size N.

Your task is to find the equilibrium index of the given array

The equilibrium index of an array is an index such that the sum of elements at lower indexes is equal to the sum of elements at higher indexes.

If there are no elements that are at lower indexes or at higher indexes, then the corresponding sum of elements is considered as 0.

Note:

Array indexing starts from 0.
If there is no equilibrium index then return -1.
If there are more than one equilibrium indexes then return the minimum index.

*/


A = [-7, 1, 5, 2, -4, 3, 0]
    let prefixSum = []
    prefixSum[0] = A[0]
    for(let i = 1; i < A.length; i++){
        prefixSum[i] = prefixSum[i - 1] + A[i]
    }
    

    let equillibriumIndex = 0
    for(let j = 1; j < A.length; j++){
        if(prefixSum[j - 1] == (prefixSum[A.length - 1] - prefixSum[j])){
            return j
        }
 
    }

   return equillibriumIndex

