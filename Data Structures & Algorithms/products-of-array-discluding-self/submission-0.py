class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        res = [1] * len(nums)
        prev = 1
        after = 1
        for i in range(len(nums)):
            if i > 0:
                prev *= nums[i-1]
            else:
                prev*=1
            res[i] *= prev
        for i in range(len(nums)-1,-1,-1):
            if i < len(nums)-1:
                after *= nums[i+1]
            else:
                after *=1
            res[i] *= after
        return res