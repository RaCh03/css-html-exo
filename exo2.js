//first method
var X=[]; 
var num=[10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var index = 9;
for (var i=index; i < num.length-1;i++)
{
    num[i]=num[i+1];
}
console.log(num);
