//max n ca. 30
var n = 35

function randomNumber(n) {
  return Math.floor(Math.random() * n + 1);
};

function ran() {
  const arr = [];
  while (arr.length < n) {
    const x = randomNumber(n);
    if (!arr.includes(x)) arr.push(x);
  }
  return arr;
}

function getRandomWhite(w) {
  do {
  var num = Math.floor(Math.random() * n + 1)
  } while (w.includes(num))
  return num
};

function makeGrid () {
  var newGrid = [];
  var whitelist = [];
  //creating an array with sub arrays
  for (let i=0; i < n; i++){
    whitelist.push([])
  }
  //creating each row
  for (var i=0; i < n; i++) {
    let j = 0
    let row = [];
    let counter = 0
    while (row.length < n) {
      counter++
      const ran = getRandomWhite(whitelist[j])
      if (counter > 50) {
        j = 0
        counter = 0
        row.splice(0,row.length)
      }
      if (!row.includes(ran) && counter != 0) {
        // whitelist[j].push(ran)
        row.push(ran)
        j++
      }
    }
    for (var k=0; k < n; k++) {
      whitelist[k].push(row[k])
    }
    newGrid.push(row);
  }

  return newGrid;
}

var grid = makeGrid()
console.log(grid)
