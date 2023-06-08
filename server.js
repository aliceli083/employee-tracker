const mysql = require('mysql');
const inquirer = require('inquirer');
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'alice0828',
        database: 'employee_db'
    },
    console.log('Connected to the employee_db database.')
);
db.connect(() => menu())
function menu() {
    inquirer.prompt(
        {
            type: "list",
            message: "choose one of the following",
            name: "menu",
            choices:
                [{
                    name: "view all departments",
                    value: "view all departments",
                },
                {
                    name: "view all roles",
                    value: "view all roles",
                },
                {
                    name: "view all employees",
                    value: "view all employees",
                },
                {
                    name: "add a department",
                    value: "add a department",
                },
                {
                    name: "add a role",
                    value: "add a role",
                },
                {
                    name: "add an employee",
                    value: "add an employee",
                }
                ]
        })
            .then(response => {
                if (response.menu === "view all departments") {
                    viewdepartment()
                }
            })

}
function viewdepartment() {
    db.query("select * from department", (err, data) => {
        console.table(data)
        menu()
    })
}