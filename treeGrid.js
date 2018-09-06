//max n = 7
var n = 6

function randomNumber(n) {
  return Math.floor(Math.random() * n + 1);
};
//creating a Random row of n length
function ran() {
  const arr = [];
  while (arr.length < n) {
    const x = randomNumber(n);
    if (!arr.includes(x)) arr.push(x);
  }
  return arr;
}

//checking if array has any duplicate values
function hasDuplicates(array) {
  var valuesSoFar = [];
  for (let i=0; i < array.length; i++) {
    var item = array[i];
    if (valuesSoFar.includes(item)) {
       return true
     } else {
      valuesSoFar.push(item)
    };
  }
  return false;
};
//checking the difference between to arrays

Array.prototype.diff = function(a) {
  return this.filter(function (i) {return a.indexOf(i) < 0;})
}

//returns the possible columns taking the asigned numbers into account
function possibleColumns (grid) {
  let numArr = []
  let columns = []
  let revertedGrid = []
  //creating an array with sub arrays
  for (let i=0; i < n; i++){
    revertedGrid.push([])
  }
  //creating a array of numbers to take the difference from
  for (let i=1; i < n+1;i++){
    numArr.push(i)
  }

  //reverting the grid
  for (let i=0;i < n; i++) {
    for (let j=0; j < grid.length;j++){
      revertedGrid[i].push(grid[j][i])
    }
  }
  //taking the possible columns
  for (let i = 0; i < n; i++) {
      var possibleNumbers = numArr.diff(revertedGrid[i])
      columns.push(possibleNumbers)
    }
  return columns
}



// Tree Object
function Node(data) {
  this.data = data;
  this.parent = null;
  this.children = [];
}
//building a tree from an Array
function recuTree (node, [head, ...tail ]) {
  if(head) {
    for (var i=0; i < head.length; i++) {
        node.children.push(new Node(head[i]))
        node.children[i].parent = node
        recuTree(node.children[i], tail)
    }
  }
}

// for easyer push and poping of arrays
function Queue() {
  this.dataStore = []
  this.enqueue = function enqueue(element) {
    this.dataStore.push(element)
  }
  this.dequeue = function dequeue() {
  return this.dataStore.shift()
  }
  this.front = function front() {
  return this.dataStore[0]
  }
  this.back = function back() {
  return this.dataStore[this.dataStore.length - 1]
  }
}
//Breath first traversal of a Tree
Node.prototype.traverseBF = function (callback) {
    var queue = new Queue();
    currentNode = this
    while(currentNode){
        for (var i = 0, length = currentNode.children.length; i < length; i++) {
            queue.enqueue(currentNode.children[i]);
        }
        if (currentNode.data !== 'root') callback(currentNode);
        currentNode = queue.dequeue();
    }
};

//calculating the unique Posibilites for the next row
function uniquePossibilities (tree) {
    let num = 1
    let i = 0
    let res = []
    let sublength = tree.children.length
    let length = n
    let possibilites = sublength ** length
    console.log(possibilites);
    let iterations =  sublength ** (length-num)
    let limit = i + iterations
    for (let j =0; j < possibilites ;j++){
      res.push([])
    }
    tree.traverseBF(function(node){
      if (i === possibilites ){
        i = 0
        num +=1
        iterations =  sublength ** (length-num)
      }
      limit = i + iterations
      for (i; i < limit;i++){
        res[i].push(node.data)
      }
    })
    return res
}

//picking one possible array
function pickPossible(arr) {
  for (let i=0; i < arr.length;i++){
    if(!hasDuplicates(arr[i])){
      return arr[i]
   }
  }
}

function makeNewGrid () {
  let grid = []
  grid.push(ran(n))
  for (let i=0; i < n-1; i++) {
    var tree = new Node('root')
    recuTree(tree,possibleColumns(grid))
    grid.push(pickPossible(uniquePossibilities(tree)))
  }
  return grid
}



module.exports = {
  makeNewGrid
}


//
// console.log(makeNewGrid(n))

// n = 7
// 279936
// 78125
// 16384
// 2187
// 128
// 1
// [ [ 1, 2, 4, 7, 3, 6, 5 ],
//   [ 2, 1, 3, 4, 5, 7, 6 ],
//   [ 3, 4, 1, 2, 6, 5, 7 ],
//   [ 4, 3, 5, 6, 7, 1, 2 ],
//   [ 5, 6, 7, 1, 2, 3, 4 ],
//   [ 6, 7, 2, 5, 1, 4, 3 ],
//   [ 7, 5, 6, 3, 4, 2, 1 ] ]
