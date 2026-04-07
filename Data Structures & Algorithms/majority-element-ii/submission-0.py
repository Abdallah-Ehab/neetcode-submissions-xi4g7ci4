class Solution:
    def majorityElement(self, nums: List[int]) -> List[int]:
        threshold = len(nums) / 3
        count = Counter(nums)
        res= []
        for c in count:
            if count[c] > threshold:
                res.append(c)
        return res