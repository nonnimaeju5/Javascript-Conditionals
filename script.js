// Javascript Conditionals Project
// Get the randomized data and make sure each person is represented by an object in the array.

let people = { 
          name: "Michael Cartmael",
          birthdate: "1/27/1978",
          children: 2,
          country: Botswana,
          can_program: false,
},
{
          name: "Chan Janway",
          birthdate: "1/12/1996",
          children: 3,
          country: Palestinian Territory,
          can_program: true,
},
{
          name: "Isak Muckle",
          birthdate: "8/10/1985",
          children: 1,
          country: Ukraine,
          knows how to program: true
},
{
          name: " Way Bendson",
          birthdate: "6/21/1997",
          children: 0,
          country: Russia,
          knows how to program: true
},
{
          name: "Romona Code",
          birthdate: "12/28/1996",
          children: 2,
          country: Japan,
          knows how to program: false
 }
]

//  Is the first person older than the last person?
let Michael = people[0]       // Michael is the first person on the list of objects so his number is 0.
let Romona = people[4]     // Romona is the last person on the list of objects so her number is 4.

if (Michael.birthdate > Romona.birthdate) {
    console.log("Michael is older than Romona.")
} else {
    console.log("Romona is older than Michael.")
}


//  Does the 2nd person have the same amount of kids as the 3rd? 
let Chan = people[1]       // Chan is the second person on the list of objects so his number is 1.
let Isak = people[2]        // Isak is the third person on the list of objects so his number is 2.

if (Chan.children == Isak.children) {
    console.log("Chan and Isak have the same amount of kids.")
} else {
    console.log("Chan and Isak do not have the same amount of kids.")
}


//  Create a statement that checks if the 1st person and the 4th person in the array both know how to program. If yes, output “Yay!”, if not output “LMGTFY”.
let Michael = people[0]       // Michael is the first person on the list of objects so his number is 0.
let Way = people[3]           // Way is the fourth person on the list of objects so his number is 3.
if (Michael.can_program == true && Way.can_program == true) {
    console.log("Yay!")
} else {
    console.log("LMGTFY")
}


//  Create a statement that checks the 2nd person in the array for their nationality. If the person’s country is Iceland, output “Hæ”, if he/she is from Spain output “Hola”, if he/she is from Korea output “여보세요”). If the country is none of the above, output “Hello”. Tip: a switch statement might be a good fit for this task.
let Chan = people[1]       // Chan is the second person on the list of objects so his number is 1.
switch (Chan.country) {
    case "Iceland":   // Chan is from Iceland.
        console.log("Hæ");
        break;
    case "Spain":   // Chan is from Spain.
        console.log("Hola");
        break;  
    case "Korea":   // Chan is from Korea.        
        console.log("여보세요");  
        break;
    default:    // Chan is from a country that is not listed above. 
        console.log("Hello");
        break;
}



// Use a ternary operator to output if the 2nd person’s name is longer than 5 characters.
let person = people[1]       // Chan is the second person on the list of objects so his number is 1.
let lengthName = person.name.length > 5 ? "longer than 5 characters" : "shorter than 5 characters";
console.log(lengthName);







