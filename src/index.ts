import inquirer from "inquirer";

let balance: number = 100000;
let pin: number = 1234;


let pinAnswer = await inquirer.prompt([
    {
        message: "Enter your pin: ",
        type: "number",
        name: "pin"
    }
]);

if(pinAnswer.pin === pin) {
    let operationAnswer = await inquirer.prompt([
        {
            message: "Choose an operation: ",
            type: "list",
            name: "operation",
            choices: ["Withdraw", "Check Balance"]
        }
    ]);

    if(operationAnswer.operation === "Withdraw") {
        let withdrawAnswer = await inquirer.prompt([
            {
                message: "Enter the amount you want to withdraw: ",
                type: "number",
                name: "withdraw"
            }
        ]);

        if(withdrawAnswer.withdraw <= balance) {
            balance -= withdrawAnswer.withdraw;
            console.log(`You have withdrawn ${withdrawAnswer.withdraw} and your new balance is ${balance}`);
        }
        else 
            console.log("Insufficient funds");
    }
    else 
        console.log(`Your balance is ${balance}`);
}
else 
    console.log("Invalid pin");