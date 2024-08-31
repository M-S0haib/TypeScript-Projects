import inquirer from "inquirer";

console.log();

console.log("             WElcome To Simple CLI Todo List");

console.log();

const numOfTasks = await inquirer.prompt([
  {
    message: "Enter the number of tasks you want to perform",
    type: "number",
    name: "number",
  },
]);

const allTask = []

for (let i = 1; i <= numOfTasks.number; i++) {
  const tasks = await inquirer.prompt([
    {
      message: `Enter task  ${i}:`,
      type: "input",
      name: "task",
    },
  ]);

  allTask.push(tasks.task)

}

console.log("\n");
console.log("All tasks are Added Sucessfully");
console.log();



for (let i = 0; i < allTask.length; i++) {
  console.log(`${i + 1}. ${allTask[1]}`);
}





