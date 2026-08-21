class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rowSets = Array.from({length: 9}, () => new Set());
        const colSets = Array.from({length: 9}, () => new Set());
        const boxSets = {};

        for(let row = 0; row < board.length; row++){
            for(let col = 0; col < board[0].length; col++){
                const spaceNumber = board[row][col];
                if(spaceNumber === "."){
                    continue;
                }
                if(rowSets[row].has(spaceNumber) || colSets[col].has(spaceNumber)){
                    return false;
                }else{
                    rowSets[row].add(spaceNumber);
                    colSets[col].add(spaceNumber);
                }

                const boxRow = Math.floor(row / 3) * 3;
                const colRow = Math.floor(col / 3) * 3;
                const boxKey = `${boxRow},${colRow}`;
                
                if(!boxSets[boxKey]){
                    boxSets[boxKey] = new Set();
                }

                if(boxSets[boxKey].has(spaceNumber)){
                    return false;
                }else{
                    boxSets[boxKey].add(spaceNumber);
                }
            }
        }

        return true;
    }
}
