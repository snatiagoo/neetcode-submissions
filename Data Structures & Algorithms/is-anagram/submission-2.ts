class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        let sMap = new Map();
        let tMap = new Map();
        if(s.length != t.length){
            return false;
        }
        
        for(let i = 0; i < s.length; i++){
            if(sMap.get(s[i]) === undefined){
                sMap.set(s[i], 1);
            }else{
                sMap.set(s[i], sMap.get(s[i]) + 1)
            }
            if(tMap.get(t[i]) === undefined){
                tMap.set(t[i], 1);
            }else{
                tMap.set(t[i], tMap.get(t[i]) + 1)
            }

        }

        for(let j = 0; j <= s.length; j++){
            let letter = s[j];

            if(!(sMap.get(letter) === tMap.get(letter))){
                return false;
            }
        }

        return true;



    }
}
