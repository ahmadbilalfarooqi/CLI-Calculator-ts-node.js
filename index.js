#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const wait = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 7000);
    });
};
async function welcome() {
    const rainbow = chalkAnimation.rainbow(`        Are you ready? \n \n        Lets Start Calculations \n \n      { Developed by Ahmad Bilal Farooqi } \n`);
    await wait();
    rainbow.stop();
    console.log(chalk.yellowBright(`       _____________________
      |  _________________  |
      | | JO  3.141592654 | |
      | |_________________| |
      |  __ __ __ __ __ __  |
      | |__|__|__|__|__|__| |
      | |__|__|__|__|__|__| |
      | |__|__|__|__|__|__| |
      | |__|__|__|__|__|__| |
      | |__|__|__|__|__|__| |
      | |__|__|__|__|__|__| |
      |  ___ ___ ___   ___  |
      | | 7 | 8 | 9 | | + | |
      | |___|___|___| |___| |
      | | 4 | 5 | 6 | | - | |
      | |___|___|___| |___| |
      | | 1 | 2 | 3 | | x | |
      | |___|___|___| |___| |
      | | . | 0 | = | | / | |
      | |___|___|___| |___| |
      |_____________________|
       `));
    console.log();
}
await welcome();
async function calculator() {
    const answers = await inquirer.prompt([
        /* Pass your questions in here */
        {
            type: "list",
            name: "operators",
            message: chalk.bgMagentaBright("Which operation you want to perform. \n"),
            choices: ["Addition", "subtractions", "multiplications", "division"],
        },
        {
            type: "number",
            name: "num1",
            message: chalk.green("Enter your first number"),
        },
        {
            type: "number",
            name: "num2",
            message: chalk.redBright("Enter your Second number"),
        },
    ]);
    if (answers.operators === "Addition") {
        console.log(chalk.yellowBright(`        ${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
    }
    else if (answers.operators === "subtractions") {
        console.log(chalk.yellowBright(`        ${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
    }
    else if (answers.operators === "multiplications") {
        console.log(chalk.yellowBright(`        ${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`));
    }
    else if (answers.operators === "division") {
        console.log(chalk.yellowBright(`        ${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
    }
}
//calculator();
async function againStart() {
    do {
        await calculator();
        var again = await inquirer.prompt([
            {
                type: "input",
                name: "restart",
                message: chalk.bgBlue("Do you want to continue? Press y for continue or n for closed: "),
            },
        ]);
    } while (again.restart === "y" ||
        again.restart === "Y" ||
        again.restart === "yes" ||
        again.restart === "YES");
}
againStart();
