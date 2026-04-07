class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        n = 2 * len(nums)
        res = [0] * n
        for i in range(n):
            res[i] = nums[i % len(nums)]
        return res