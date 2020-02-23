profiter = {}

profiter.reduce = (stocks = []) => {
    if (!stocks.length) return [-1]
    const results = stocks.reduce(([buyValue, profit, max_profit, minValueBuying, maxValueBuying], nextSellValue) => {
        if ((nextSellValue < buyValue) && profit === -1) minValueBuying = nextSellValue
        
        new_profit = nextSellValue - minValueBuying > 0 ? 
                     nextSellValue - minValueBuying : -1
        if (new_profit > max_profit) {
            max_profit = new_profit
            maxValueBuying = nextSellValue
        }
        return [nextSellValue, new_profit,max_profit, minValueBuying, maxValueBuying ]
    }, [stocks[0], -1, -1, stocks[0], stocks[0]])

    return results
}

module.exports = profiter