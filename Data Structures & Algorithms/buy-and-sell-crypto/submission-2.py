class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if len(prices) == 1:
            return 0
        i = 0
        j = 1
        max_profit = -float("inf")
        while i < len(prices) and j<len(prices):
            if prices[j] < prices[i] :
                i = j
            profit = prices[j] - prices[i]
            max_profit = max(profit,max_profit)
            j+=1
        return max_profit