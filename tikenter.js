// function table(q){
//  for(var i=1; i<11; i++)
// console.log(i*q)


// }
// table(2)


// function add(a,b){
// console.log(a+b);

// }
// add(123,6)



// function click(){
// document.getElementById("bhatt").innerHTML="hi it's me bhatt"


// }
// click()
function add(){

var a=Math.random ()*5+2;
var b=Math.random ()*6+2;
if(a>b){
console.log("a is greater")
}
else if(a<b){
    console.log("b is greater")

document.getElementById("bhatt").innerHTML=a
document.getElementById("ram").innerHTML=b
}
add()