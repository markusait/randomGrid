// requirejs(['typeWriter.js']);
// let {grid, n} = require('./fastGrid.js')
// console.log(grid,n);


var text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm"
var speed = 5;
// var ele = document.getElementById("select");

var type = ""

//implement

var text2 = ["Lorem ipsum dolor sit amet, consectetur adipisicing elit,",
            "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nos",
            "trud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]



var n = 9

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
    // TODO: find better solution for this workaround
    //workaround to shuffle the current column by place num at the end
    if (randomNumber(2) === 2) col[i].push(col[i].splice(col[i].indexOf(num),1)[0])
    // check if it ran into dead-end
    if(num === undefined) {
      //going back to the beginning
      i = 0
      row = []
    } else {
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
  return grid
}

var grid = makeGrid()


let table =  document.getElementById('myTabel')
let rowIndex = 0
let cellIndex = 0
let i = 0


function addTabel(n) {
  for (let i = 0; i < n; i++){
    let newRow = table.insertRow(i);
    for (let j = 0; j < n; j++) {
      let newCell = newRow.insertCell(j);
    }
  }
}

function typeWriter(){
    if (cellIndex >= n) {
      cellIndex = 0
      rowIndex++
    }
    if (i < n * n) {
      let number = document.createTextNode(JSON.stringify(grid[rowIndex][cellIndex]));
      let cell = table.rows[rowIndex].cells[cellIndex]
      cell.appendChild(number)
    }
    i++
    cellIndex++
    setTimeout(typeWriter, speed);
}
addTabel(n)
typeWriter()
// console.log(grid);























// function addTabel(n) {
//   let table =  document.getElementById('myTabel')
//
//   for (let i=0; i < n; i++){
//     let newRow = table.insertRow(i);
//     //making cells and filling them with the grid's numbers
//     for (let j = 0; j < n; j++) {
//       let newCell = newRow.insertCell(j);
//       let number = document.createTextNode(JSON.stringify(grid[i][j]));
//       newCell.appendChild(number);
//       console.log('added');
//     }
//   }
// }





//
// function typeWriter(){
//       if (i < text.length ) {
//         type += text[i]
//         ele.innerHTML = type
//       }
//         else {
//         type = type.slice(0,type.length-1)
//         ele.innerHTML = type
//       }
//       i++;
//       //when first loop is finished
//       if (i >= (text.length *2)) {
//         j++
//         text = grid[j]
//         i = 0
//       }
//       setTimeout(typeWriter, speed);
// }
