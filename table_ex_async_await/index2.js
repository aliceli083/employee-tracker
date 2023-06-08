const inquirer = require('inquirer');
const { table } = require('table');

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'registrar_db'
  }
)
.then(() => {
  console.log(`Connected to the registrar_db database.`)
});

const config = {
  border: {
    topBody: `─`,
    topJoin: `┬`,
    topLeft: `┌`,
    topRight: `┐`,

    bottomBody: `─`,
    bottomJoin: `┴`,
    bottomLeft: `└`,
    bottomRight: `┘`,

    bodyLeft: `│`,
    bodyRight: `│`,
    bodyJoin: `│`,

    joinBody: `─`,
    joinLeft: `├`,
    joinRight: `┤`,
    joinJoin: `┼`
  }
};

async function showTable (data){
  let tableData = [];
  // option 1 fancy one line table data format
  tableData = [
    //column
    Object.keys(data[0]), 
    //values
    ...data.map(val => Object.values(val))];

  // // option 2 for tables, using basic for loop and starter array
  // tableData = [Object.keys(data[0])];
  // for(var i = 0; i< data.length; i++){
  //   tableData.push(Object.values(data[i]));
  // }

  // prompt is a promise based function
  const answers = await inquirer.prompt([
    {
      message: "\n" + table(tableData, config),
      type: 'input',
      name: 'name'
    }
  ]);
}

const dbData = [
  { id: 1, name: "Anthony"},
  { id: 2, name: "Myself"},
  { id: 3, name: "Turtle"},
];

const addCourse = /* async */ function() {
  //TODO complete adding a course by asking for instructor and course info
  console.log("Test");
};

const menu = async function () {
  // console.log("Do stuff after!");

  const answers = await inquirer.prompt([
    {
      message: "What do you want...",
      type: 'list',
      name: 'option',
      choices: [
        "Add a course"
      ]
    }
  ])
  if(answers.option === "Add a course"){
    addCourse();
  }
}

const init = async function(){
  // show table is an async function which will look like a promise in console
  // if we print
  await showTable(dbData);
  await menu();
}

init();

