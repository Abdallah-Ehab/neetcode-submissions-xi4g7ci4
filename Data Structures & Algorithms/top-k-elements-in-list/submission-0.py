class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        bucket = [[] for _ in range(len(nums)+1)]
        count = Counter(nums)
        res = []
        for n in count:
            bucket[count[n]].append(n)
        
        for i in range(len(bucket)-1,0,-1):
            for n in (bucket[i]):
                res.append(n)
                if len(res) == k:
                    return res