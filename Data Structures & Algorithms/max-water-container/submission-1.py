class Solution:
    def maxArea(self, heights: List[int]) -> int:
        # l,r = 0,1
        # maxArea = float('-inf')
        # while l < r and r < len(heights):
        #     area = 0
        #     if heights[l] < heights[r]:
        #         area = (r - l) * heights[l]
        #     elif heights[r] <= heights[l]:
        #         area = (r - l) * heights[r]
        #     maxArea = max(area,maxArea)
        #     if heights[r] > heights[l]:
        #         l+=1
        #         r = l
        #     r+=1
        # return int(maxArea) 
        l,r = 0,len(heights) - 1
        res = 0
        while l < r:
            area = (r-l) * min(heights[l],heights[r])
            res = max(area,res)
            if heights[l] < heights[r]:
                l+= 1
            else:
                r -=1
        return res
