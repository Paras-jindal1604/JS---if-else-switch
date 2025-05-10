
//? The switch statement is used to perform different actions based on different conditions.

// This is how it works:

// The switch expression is evaluated once.
// The value of the expression is compared with the values of each case.
// If there is a match, the associated block of code is executed.
// If there is no match, the default code block is executed.


//* The default Keyword -  The default keyword specifies the code to run if there is no case match.

//* The break Keyword
// When JavaScript reaches a break keyword, it breaks out of the switch block.
// This will stop the execution inside the switch block.
// It is not necessary to break the last case in a switch block. The block breaks (ends) there anyway.



//? Switching Details
// If multiple cases matches a case value, the first case is selected.
// If no matching cases are found, the program continues to the default label.



//? Strict Comparison
// Switch cases use strict comparison (===).
// The values must be of the same type to match.
// A strict comparison can only be true if the operands are of the same type.



switch(new Date().getDay()){
    case 0 :
        console.log("Sunday");
        break;
    case 1 :
        console.log("Monday");
        break;
    case 2 :
        console.log("Tuesday");
        break;
    case 3 :
        console.log("Wednesday");
        break;
    case 4 :
        console.log("Thursday");
        break;
    case 5 :
        console.log("Friday");
        break;
    case 6 :
        console.log("Saturday");
        break;
    default :
        console.log("No valid date found");
}






