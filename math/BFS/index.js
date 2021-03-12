/**
 * 
 *    输入：grid = [
 *        ["1","1","1","1","0"],
 *        ["1","1","0","1","0"],
 *        ["1","1","0","0","0"],
 *        ["0","0","0","0","0"]
 *    ]
 *    输出：1
 */

 /**
 * 
 *   输入：grid = [
 *       ["1","1","0","0","0"],
 *       ["1","1","0","0","0"],
 *       ["0","0","1","0","0"],
 *       ["0","0","0","1","1"]
 *   ]
 *   输出：3
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    var MyCircularQueue = function(k) {
        this.queue = new Array(k);
        this.head = null;
        this.tail = null;
        this.startIndex = 0;
        this.endIndex = k - 1;
    };

    /** 
     * @param {number} value
     * @return {boolean}
     */
    MyCircularQueue.prototype.enQueue = function(value) {
        if(this.isFull()) {
            return false
        }
        const operateIndex = (this.tail === null || this.tail === this.endIndex) ?                                          this.startIndex : this.tail + 1;
        this.queue[operateIndex] = value;
        this.tail = operateIndex;
        this.head = (this.head || this.head === this.startIndex) ? this.head : operateIndex;
        return true
    };

    /**
     * @return {boolean}
     */
    MyCircularQueue.prototype.deQueue = function() {
        if(this.isEmpty()) {
            return false
        }
        const nextIndex = (this.head === this.endIndex && this.head !== this.tail) ?                                     this.startIndex : (this.head === this.tail) ? null : this.head + 1;
        this.queue[this.head] = undefined;
        this.tail = this.head === this.tail ? nextIndex : this.tail;
        this.head = nextIndex;
        return true
    };

    /**
     * @return {number}
     */
    MyCircularQueue.prototype.Front = function() {
        return this.isEmpty() ? -1 : this.queue[this.head]
    };

    /**
     * @return {number}
     */
    MyCircularQueue.prototype.Rear = function() {
        return this.isEmpty() ? -1 : this.queue[this.tail]
    };

    /**
     * @return {boolean}
     */
    MyCircularQueue.prototype.isEmpty = function() {
        return this.head === this.tail && this.queue[this.head] === undefined
    };

    /**
     * @return {boolean}
     */
    MyCircularQueue.prototype.isFull = function() {
        return (this.head === this.startIndex && this.tail === this.endIndex) || this.tail + 1              === this.head
    };

    let num = 0; // 岛屿数量
    let m = grid.length; // 高度
    let n = grid[0].length; // 宽度
    let Queue = new MyCircularQueue(m*n); // 循环队列
    let islandPosition = getIslandPosition(); // 岛屿坐标
    let fns = []; // 拦截函数

    floodIsLand(islandPosition);

    function getIslandPosition() {
        const islandPosition = {x:null, y:null}
        for(let i=0; i<m; i++) {
            let row = grid[i];
            for(let j=0; j<row.length; j++) {
                let element = row[j];
                    if(element === '1') {
                        islandPosition.x = j
                        islandPosition.y = i
                        num++
                        return islandPosition;
                    }
                }
            }
        return islandPosition
    }

    function floodIsLand({x,y} ={x: null, y: null}, onlyEnQueue = false) {
        if(x === null) {
            return
        }
        if(x>n-1 || y>m-1 || x < 0 || y < 0){ //边界返回
            return
        }
        if(grid[y][x] === '0') { //已经是水的返回
            return
        }
        Queue.enQueue({x, y}) //入队
        if(onlyEnQueue) { //只入队操作
            fns.push((({x,y}) => {
                floodIsLand({x:x+1, y}, true) //淹没右边
                floodIsLand({x:x, y:y+1}, true) //淹没下边
                floodIsLand({x:x-1, y}, true) //淹没左边
                floodIsLand({x:x, y:y-1}, true) //淹没上边
            }).bind(null, {x:x,y:y}))
        } else {
            floodIsLand({x:x+1, y}, true) //淹没右边
            floodIsLand({x:x, y:y+1}, true) //淹没下边
            floodIsLand({x:x-1, y}, true) //淹没左边
            floodIsLand({x:x, y:y-1}, true) //淹没上边
        }
        let front = Queue.Front()
        if(front !== -1) {
            grid[front.y][front.x] = '0' //真正淹没
        }
        Queue.deQueue() //出队
        if(fns.length>0) {
            fns.forEach((fn, index) => {
                let a = fn
                fn && (fns[index] = null)
                a && a()
            })
            fns = []
        } else {
            let islandPosition = getIslandPosition(); // 岛屿坐标
            floodIsLand(islandPosition);
        }
    }

    return num
};