class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!this.keyStore.has(key)){
            this.keyStore.set(key, new Map());
        }

        this.keyStore.get(key).set(timestamp, value);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if(!this.keyStore.has(key)){
            return "";
        }

        let seen = -1;

        for(const time of this.keyStore.get(key).keys()){
            if(time <= timestamp){
                seen = Math.max(seen, time);
            }
        }

        return seen === -1 ? "" : this.keyStore.get(key).get(seen);
    }
}
