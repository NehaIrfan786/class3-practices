//Create a grading system that takes subject marks as input from the user through prompts and 
//returns the corresponding grades using functions and if-else conditions

let marks;
console.log("Enter your marks:"); 

if(marks>=85){
    console.log("Grade A");
} else if(marks>=70){
    console.log("Grade B");
} else if(marks>=60){
    console.log("Grade C");
} else if(marks>=50){
    console.log("Grade D");
} else if(marks>=40){
    console.log("Grade E"); 
} else {
    console.log("fail");
}  