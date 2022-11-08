import inquirer from 'inquirer';
inquirer
    .prompt([
{type: 'input', name: 'age',message: 'How old are you?'},
{type: 'input', name: 'gender',message: 'How gender are you?'},
{type: 'input', name: 'name',message: 'What is your name?'},
{type: 'input', name: 'height',message: 'How tall are you?'},        
])

.then((answer)=> {
    console.log(' I am ' + answer.age + ' years old');
    console.log(' I am ' + answer.gender + '');
    console.log(' I am ' + answer.name + '');
    console.log(' I am ' + answer.height + ' centimeters');
})

