class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false
        }
        let sFreq = new Array(26).fill(0)
        let tFreq = new Array(26).fill(0)
        for(let i = 0; i < s.length; ++i){
            sFreq[s.charCodeAt(i) - 97] += 1        
            tFreq[t.charCodeAt(i) - 97] += 1
        }
        return sFreq.every((val,i)=> val === tFreq[i]);

    }
}
