// max n ca. 60
var n = 45

var randomNumber = (n) => {
  return Math.floor(Math.random() * n + 1);
};
//creating a Random row of n length
var ran = () => {
  const arr = [];
  while (arr.length < n) {
    const x = randomNumber(n);
    if (!arr.includes(x)) arr.push(x);
  }
  return arr;
}

//checking if array has any duplicate values
var hasDuplicates = (array) => {
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
var possibleColumns = (grid) => {
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

//takeing the possible Columns and calculating each row
function columnToRow(col) {
  let row = []
  let i = 0
  while(row.length < n){
    var num = (col[i].diff(row))[0]
    //pushing num to the end
    if (randomNumber(2) === 2) col[i].push(col[i].splice(col[i].indexOf(num),1)[0])
    // check if it ran into dead-end or it has to go one step back
    if(num === undefined) {
      i = 0
      row = []
    } else {
      //only mainitaining wl for each column
      row.push(num)
      i++
    }}
    return row
}

function makeGrid() {
  let grid = []
  grid.push(ran(n))
  while (grid.length < n){
    grid.push(columnToRow(possibleColumns(grid)))
  }
  console.log(grid)
}

var start = new Date().getTime();
makeGrid();
var end = new Date().getTime();
var time = end - start;
console.log('Execution time in ms: ' + time);
