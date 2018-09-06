let grid = require('./universalTreeGrid.js')


var i = 0
var text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm"
var speed = 50;
// var ele = document.getElementById("select");

var type = ""

//implement

var text2 = ["Lorem ipsum dolor sit amet, consectetur adipisicing elit,",
            "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nos",
            "trud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]
var j = 0


console.log(grid.makeNewGrid())


text = grid[j]

// var tabel = document.getElementById('myTabel');

// function makeTabel() {
//   tabel.insertCell(n)
// }
// makeTabel()

// function typeGrid(){
//   for(var i=0; i<6;i++){
//     for(var j=0; j <6;j++){
//       tabel.rows[i].cells[j].innerHTML = grid[i][j]
//     }
//   }
// }
// typeGrid()

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
//













// //version 1
// function typeWriter(){
//     for (var j=0; j < text2.length;j++) {
//         if (i < text2[j].length ) {
//           type += text2[j].charAt(i)
//           ele.innerHTML = type
//         }
//         else {
//           type = type.slice(0,type.length-1)
//           ele.innerHTML = type
//         }
//         i++;
//         if (i = text2[j].length * 2) i =0
//         setTimeout(typeWriter, speed);
//       }
// }
