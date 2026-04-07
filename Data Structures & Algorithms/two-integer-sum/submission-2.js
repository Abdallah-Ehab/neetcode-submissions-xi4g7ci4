class Solution {
    /**
     * @param {number[]}
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashMap = new Map()
        for(var i = 0; i < nums.length; ++i){
            let n = nums[i]
            if(hashMap.has(n)){
                return [hashMap.get(n), i];
            }
            hashMap.set(target - n, i)
        }
        return [];
    }
}