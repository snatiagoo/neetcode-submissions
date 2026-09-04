class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let i = 0; // left, slow
        let j = 1; // right, fast
        let sum = 0;

        while(i < nums.length -1 ){
            sum = nums[i] + nums[j];
            if(sum === target){
                 return [i, j]
            }
            if(j < nums.length - 1){
                j++;
            }else{
                i++;
                j = i + 1;
            }

        
        }

        return [];
    }
}
