class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        
        let max = -1;
        
        for(let i = arr.length - 1; i >= 0; i--){
             let curr = arr[i];
             arr[i] = max;
             if(curr > max){
                max = curr;
             }

             
        }

        return arr;

    
    }

}
