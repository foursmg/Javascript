//switch_statement

let day=3;
switch(day){
    case 1: console.log("Monday");
    break;
    case 2: console.log("Tuesday");
    break;
    case 3: console.log("Wednesday");
    break;
    case 4: console.log("Thursday");
    break;
    case 5: console.log("Friday");
    break;
    case 6: console.log("Saturday");
    break;
    case 7: console.log("Sunday");
    break;

    default: console.log("Enter a Valid Number.");

}

console.log("-------------------------------");

//calculator
// take user input for two numbers
let number1 = Number(prompt("Enter the value of number1: "));
let number2 = Number(prompt("Enter the value of number2: "));

// take user input to select an operator 
const operator = prompt("Enter a operator ( either +, -, * or / ): ");

switch(operator) {

    case "+":
        result = number1 + number2;
         console.log(number1 +" + "+number2+ " = "+result);
        break;

    case "-":
        result = number1 - number2;
         console.log(number1 +" - "+number2+ " = "+result);
        break;

    case "*":
        result = number1 * number2;
        console.log(number1 +" * "+number2+ " = "+result);
        break;

    case "/":
        result = number1 / number2;
        console.log(number1+" / "+number2+" = "+result);
        break;

    default:
        console.log("Invalid operator");
}