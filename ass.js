//1. Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five print
// "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

for ( let i = 1; i <= 100; i++ )
{
  if ( i%3 === 0 && i%5 === 0 )
  {
    console.log(i," FizzBuzz" );
  }
  else if ( i%3 === 0 ) 
  {
    console.log(i, " Fizz" );
  }
  else if ( i%5 === 0 ) 
  {
    console.log(i," Buzz" );
  }
  else
  {
    console.log(i);
  }
}
// Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
var sum = 0;
for (var x = 0; x < 1000; x++)
{
    if (x % 3 === 0 || x % 5 === 0)
    {
       sum += x;
    }
}
console.log(sum);


// Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will
// check if the current number is odd or even, and display a message to the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

function add(){
  for(let num=0;num<=20;num++){
    if(num%2!==0){        
        console.log(num,`is odd`);        
    }
    else{
        console.log(num,`is even`);
    }
}
}
add();

// Write a JavaScript conditional statement to find the largest of five numbers in the
// given array.
// Let num = [-2, 4,-5, 6,0]

var numb=[-2,4,-5,6,0]
let largest = 0;
for (let a = 0; a < numb.length; a++) {
    if (numb[a] > largest) {
       largest = numb[a];
    }
}
console.log(largest);


// Using conditional statements, write a JavaScript program to find the largest of the
// following two numbers: 10 & 40
let a = 40;
let b = 10;
function greater(){
    if(a>b){
        console.log(a)
    }
    else{
        console.log(b)
    }
}
greater()


// Write a JavaScript program to find leap years from 2000 to 2022
for (let leap = 2000; leap <= 2022; leap++) {
  if (leap % 4 === 0 && leap % 100 !== 0 || leap % 400 === 0) {
      console.log(leap);
  }
  else{
      console.log(leap+" Is not a leap year")
  }
}










 
 

