import inquirer from 'inquirer';

inquirer
    .prompt([
{type: 'input', name: 'age',message: ''},
{type: 'confirm', name: 'värv',message: 'Kas sulle meeldib sinine värv'},
{type: 'password', name: 'parool',message: 'Kas sisestatud password on õige?', mask: ''},
{type: 'checkbox', name: 'checkbox',message: 'pitsa burger?', choices:[
    'pitsa',
    'burger',
]}, 

{type: 'number', name: 'number',message: 'How old are you'},
{type: 'list', name: 'list ',message: 'What kind of pizza do you want', choices:[
    "pepperoni",
    "kebab",
]},
{type: 'rawlist', name: 'rawlist',message: 'How much money do you have?', choices:[
    '18',
    '15',
    '12',
    '9',
]},
{type: 'expand', name: 'expand',message: 'What to change?',  choices: [
    
    {
      key: 'y',
      name: 'Overwrite',
      value: 'Change few things',
    },
   
  
]},

{type: ' editor', name: 'editor',message: ''},

])

.then((answer)=> {
    console.log(' I am ' + answer.age + ' years old');
    console.log('  ' + answer.värv + '');
    console.log(' My password is ' + answer.parool + '');
    console.log(`  I like  ${answer.checkbox} ` );
    console.log(`  I am  ${answer.number} ` );
    console.log(`  I have  ${answer.rawlist} ` );
    console.log(`  I have to  ${answer.expand} ` );
    console.log(`    ${answer.editor} ` );
    
})

