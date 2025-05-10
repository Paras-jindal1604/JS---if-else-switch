
//?  Conditional statements - used to perform different actions based on different conditions.


/*

In JavaScript we have the following conditional statements:

Use "if" to specify a block of code to be executed, if a specified condition is true
Use "else" to specify a block of code to be executed, if the same condition is false
Use "else if" to specify a new condition to test, if the first condition is false
Use "switch" to specify many alternative blocks of code to be executed

*/

let a = 5;
if(a>=5){
    console.log("hello");
}
// "if" is used rarely. "if-else" is widely used.


//*    "if-else"

let vote = 18;

if(vote >= 18){
    console.log("you are eligible to vote");
}else{
    console.log("you can't vote, grow up");
}



//*   "if- else-if - else"

// generating a random age b/w 1-100 and checking its category using if-else-if ladder

let age = Math.floor((Math.random() * (100 - 1 + 1)) + 1);

if( age <= 14){
    console.log("KID");
} 
else if( age > 65){
    console.log("Old");
}
else{
    console.log("Working");
}





