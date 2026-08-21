class FreqStack {
    constructor() {
        this.count = {};
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.count[val] = (this.count[val] || 0) + 1;
        this.stack.push(val);
    }

    /**
     * @return {number}
     */
    pop() {
        let max = Math.max(...Object.values(this.count));

        let i = this.stack.length - 1;

        while(this.count[this.stack[i]] != max ){
            i--;
        }
        const val = this.stack.splice(i,1);
        this.count[val] = this.count[val] - 1;

        return val;
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
