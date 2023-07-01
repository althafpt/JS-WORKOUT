let count=0;
let prev=document.getElementById("Previous");
let countElement=document.getElementById("count-el");
function increment(){
   count+=1;
   countElement.textContent=count;
}
function save(){
   if(count==0)
      return 0; 
   console.log(count);
   prev.textContent+=count+" - ";
   count=0;
   countElement.textContent=count;
}