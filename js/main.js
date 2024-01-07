/*
var arrofqoutes=["Be yourself; everyone else is already taken.","So many books, so little time."
," A room without books is like a body without a soul. Marcus Tullius Cicero","Be the change that you wish to see in the world."
,"In three words I can sum up everything I've learned about life: it goes on."
]
var arrRandomNum=[];
function Quote()
{
var randomNum=Math.floor(Math.random()* arrofqoutes.length)
if(arrRandomNum.includes(randomNum))
{
randomNum=randomNum+1;
console.log(randomNum)
document.getElementById("demo").innerHTML=arrofqoutes[randomNum]
}
else{
    console.log("hhhhhh")
}
*/

// document.getElementById("demo").innerHTML=arrofqoutes[randomNum]

// var arrofqoutes = [
//   "Be yourself; everyone else is already taken.",
//   "So many books, so little time.",
//   " A room without books is like a body without a soul. Marcus Tullius Cicero",
//   "Be the change that you wish to see in the world.",
//   "In three words I can sum up everything I've learned about life: it goes on.",
// ];
// var arrRandomNum = [];
// function Quote() {
//   for (var i = 0; i < arrRandomNum.length; i++) {
//     var randomNum = Math.random() * arrofqoutes.length-1;
//     if (arrRandomNum.includes(randomNum)) {
//       continue;
//     } else {
//       var x = Math.floor(randomNum);
//       arrRandomNum.push(randomNum);
//       document.getElementById("demo").innerHTML = arrofqoutes[x];
//     }
//   }
// }

var arrofqoutes = [
    "Be yourself; everyone else is already taken.",
    "So many books, so little time.",
    " A room without books is like a body without a soul. Marcus Tullius Cicero",
    "Be the change that you wish to see in the world.",
    "In three words I can sum up everything I've learned about life: it goes on.",
  ];
  var arrRandomNum = [];

  function Quote() {

    var randams=Math.floor(Math.random()*arrofqoutes.length)
    document.getElementById("demo").innerHTML=arrofqoutes[randams]
    

  }
  