class StockSpanner {
    constructor() {
        this.prices=[];
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price) {
        let span = 0;
        this.prices.push(price);

        let index = this.prices.length - 1;

        while(index >= 0 && price >= this.prices[index]){
            span++;
            index--;
        }

        return span;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
