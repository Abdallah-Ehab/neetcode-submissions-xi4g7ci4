class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        // I should implement a prefix tree or we can just brute force it
        // brute force solution
        if(strs.length === 0) return "";
        let end = 0;
        let maxEnd = strs[0].length;
        for(let i = 0; i < strs.length - 1; ++i){
            let j = i + 1;
            while (end < strs[i].length && 
            end < strs[j].length && end < maxEnd && 
            strs[i][end] === strs[j][end]){
                end++;
            }
            maxEnd = Math.min(end, maxEnd)
            end = 0
        }
        return strs[0].slice(0,maxEnd);
    }
}
