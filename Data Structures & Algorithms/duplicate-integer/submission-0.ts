class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let set = new Set(nums);
        if(nums.length != set.size){
            return true;
        }else{
            return false;
        }
    }
}
