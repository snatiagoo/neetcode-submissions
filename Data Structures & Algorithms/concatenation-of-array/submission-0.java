class Solution {
    public int[] getConcatenation(int[] nums) {
        Integer length = nums.length;
        int[] ans = new int[length * 2];
        
        for(Integer i = 0; i < length; i++){
            ans[i] = nums[i];
            ans[i + length] = nums[i];
        }

        return ans;
    }
}