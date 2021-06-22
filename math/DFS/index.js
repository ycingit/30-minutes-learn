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
    /**
     * initialize your data structure here.
     */
    var Stack = function() {
        this.stack = []
    };

    /** 
     * @param {number} x
     * @return {void}
     */
    Stack.prototype.push = function(x) {
        this.stack.push(x)
    };

    /**
     * @return {void}
     */
    Stack.prototype.pop = function() {
        if (this.isEmpty()) {
            return null
        }
        return this.stack.pop()
    };

    /**
     * @return {number}
     */
    Stack.prototype.top = function() {
        if (this.isEmpty()) {
            return null
        }
        return this.stack[this.stack.length - 1]
    };

    /**
     * @return {boolean}
     */
    Stack.prototype.isEmpty = function() {
        return this.stack.length === 0 ? true : false
    };

    /**
     * @return {boolean}
     */
     Stack.prototype.isInStack = function(fn = () => {}) {
        return this.stack.some(fn)
    };

    let num = 0; // 岛屿数量
    let m = grid.length; // 高度
    let n = grid[0].length; // 宽度
    let stack = new Stack(); // 栈
    let islandPosition = getIslandPosition(); // 岛屿坐标
    let path = {} // 行走路径

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

    function floodIsLand({x, y, isEnd} = {x: null, y: null, isEnd: false}) {
        if(x === null) {
            return
        }
        if(x>n-1 || y>m-1 || x < 0 || y < 0){ //边界返回
            return
        }
        if(grid[y][x] === '0') { //已经是水的返回
            return
        }
        if (isEnd) {
            const obj = stack.pop()
            grid[obj.y][obj.x] = '0' //真正淹没
            if (stack.isEmpty()) {
                let islandPosition = getIslandPosition(); // 岛屿坐标
                floodIsLand(islandPosition);
            } else {
                floodIsLand(getDirection(stack.top()))
            }
        } else {
            stack.push({x, y})
            floodIsLand(getDirection({x, y}))
        }
    }

    function getDirection({x, y} = {x: null, y: null}) {
        const directionMap = [
            (x,y) => {
                return {
                    x,
                    y
                }
            }, 
            (x,y) => {
                return {
                    x: x+1,
                    y
                }
            }, 
            (x,y) => {
                return {
                    x,
                    y: y+1
                }
            }, 
            (x,y) => {
                return {
                    x: x-1,
                    y
                }
            }, 
            (x,y) => {
                return {
                    x,
                    y: y-1
                }
            }
        ]
        let objName = JSON.stringify({x, y})
        // 1右边 -> 2下边 -> 3左边 -> 4上边
        if (!path[objName]) {
            path[objName] = 0
        }
        path[objName]++
        let direction = path[objName] < 5 ? directionMap[path[objName]](x,y) : null
        while(path[objName] < 5 && (!isIsland(direction) || stack.isInStack((item) => item.x === direction.x && item.y === direction.y ))) {
            path[objName]++
            direction = path[objName] < 5 ? directionMap[path[objName]](x,y) : null
        }
        return path[objName] > 4 ? {x, y, isEnd: true} : direction
    }

    function isIsland({x, y} = {x: null, y: null}) {
        if(x>n-1 || y>m-1 || x < 0 || y < 0){ //边界返回
            return false
        }
       return grid[y][x] === '1'
    }

    return num
};