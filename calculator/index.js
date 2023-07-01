let n1=0,n2=0;
console.log(n1,n2);
let ans=0;
function add(){
   n1=document.getElementById("num1").value;
   n2=document.getElementById("num2").value;
   ans=parseInt(n1)+parseInt(n2);
   res();
}
function sub(){
   n1=document.getElementById("num1").value;
   n2=document.getElementById("num2").value;
   ans=n1-n2;
   res();
}
function div(){
   n1=document.getElementById("num1").value;
   n2=document.getElementById("num2").value;
   ans=n1/n2;
   res();
}
function mul(){
   n1=document.getElementById("num1").value;
   n2=document.getElementById("num2").value;
   ans=n1*n2;
   res();
}
function res(){
document.getElementById("result").innerText=ans;
}