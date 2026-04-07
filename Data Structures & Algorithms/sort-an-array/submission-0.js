class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        this.quickSort(0, nums.length - 1, nums)
        return nums
    }
    quickSort(start,end, nums){
        if(start >= end){
            return
        }
        let pivot = this.partition(start,end,nums)
        this.quickSort(start, pivot - 1, nums)
        this.quickSort(pivot + 1, end, nums)
    }
    partition(start ,end,nums){
        let j = start -1;
        let pivotVal = nums[end]
        for(let i = start; i < end; i++){
            if(nums[i] < pivotVal){
                j++;
                [nums[i],nums[j]] = [nums[j],nums[i]]
            }
        }
        j++;
        [nums[end],nums[j]] = [nums[j],nums[end]]
        return j;
    }
}
