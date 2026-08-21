class FreqStack {
    constructor() {
        this.count = {};
        this.map = {};
        this.max = 0;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.count[val] = (this.count[val] || 0) + 1;

        this.max = Math.max(this.max, this.count[val]);

        if(!this.map[this.count[val]]){
            this.map[this.count[val]] = [];
        }

        this.map[this.count[val]].push(val);
    }

    /**
     * @return {number}
     */
    pop() {
        let result = this.map[this.max].pop();

        this.count[result] = this.count[result] - 1;

        if(this.map[this.max].length === 0){
            this.max--;
        }

        return result;
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
