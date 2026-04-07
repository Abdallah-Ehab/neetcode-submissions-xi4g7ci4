class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        diff = {}
        res = []
        for i in range(len(nums)):
            cur_diff = target - nums[i]
            if cur_diff in diff:
                res.append(diff[cur_diff])
                res.append(i)
                return res
            else:
                diff[nums[i]] = i