class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let count = 0;
        let current = 0;
        for(let j = 0; j < nums.length; j++){
            if(nums[j] == 1){
                current++;
            }
            if(current > count) count = current;
            if(nums[j + 1] == 0) current = 0;
        }

        return count;


    }
}
