import inquirer from "inquirer";
let todos = ["naina", "zainab"];
async function createTodo(todos) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            name: "select",
            message: "select an operation",
            choices: ["Add", "Update", "View", "Delete"],
        });
        if (ans.select == "Add") {
            let addTodo = await inquirer.prompt({
                type: "input",
                name: "todo",
                message: "Add items in the list",
            });
            todos.push(addTodo.todo);
            //console.log(todos);
            todos.forEach(todo => console.log(todo));
        }
        if (ans.select == "Update") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                name: "todo",
                message: "update items in the list",
                choices: todos.map(item => item)
            });
            let addTodo = await inquirer.prompt({
                type: "input",
                name: "todo",
                message: "Add items in the list",
            });
            let newTodo = todos.filter(val => val !== updateTodo.todo);
            todos = [...newTodo, addTodo.todo];
            //console.log(todos);
            todos.forEach(todo => console.log(todo));
        }
        if (ans.select == "View") {
            console.log("*** TO DO LIST ***");
            console.log(todos);
            console.log("********************");
        }
        if (ans.select == "Delete") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                name: "todo",
                message: "update items in the list",
                choices: todos.map(item => item)
            });
            let newTodo = todos.filter(val => val !== deleteTodo.todo);
            todos = [...newTodo];
            console.log(todos);
        }
    } while (true);
}
createTodo(todos);
