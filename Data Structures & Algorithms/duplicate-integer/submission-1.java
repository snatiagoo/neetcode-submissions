class Solution {
    public boolean hasDuplicate(int[] nums) {
        HashSet<Integer> numSet = new HashSet<Integer>();
        Integer numL = nums.length;

        for(Integer i = 0; i < numL; i++){
            if(numSet.contains(nums[i])){
                return true;
            }else{
                numSet.add(nums[i]);
            }
        };

        return false;
    }

}