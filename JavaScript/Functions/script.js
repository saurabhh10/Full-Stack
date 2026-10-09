// let a=10;
// let b=30;



sum(6,7);

function sum(a,b)
{
   let c=a+b;
   console.log(c);
}



sum(5,10);




function sum_with_d(x,y=70)
{
   let j=x+y;
   console.log(j);
}

sum_with_d(5,6);
sum_with_d(5);



function calculate(a,b,c)
{
   return a+b-c;
}

 let ans=calculate(10,20,5);
 console.log(ans)