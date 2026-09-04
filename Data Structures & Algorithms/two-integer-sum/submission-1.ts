class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let diff = 0;
        let numHash = new Map();
        
        for(const [index, n] of nums.entries()){
            diff = target - n;
            if(diff in numHash){
                return [numHash[diff], index]
            }else{
                numHash[n] = index;
            }
            
        }
        return []
    }
}
