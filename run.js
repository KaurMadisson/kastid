function write(string) {
    process.stdout.write(string);

}
import chalk from 'chalk';
import boxen from 'boxen';

write(chalk.blue.bgGreen('Hello chalk'));

for(let i=0; i<16; i++){
    for(let j=0; j<16; j++){
        let color= (i*j).toString()
        write(chalk.ansi256(color)(color.padEnd(4,' ')));
    }
    write('\n');
}

write(boxen(chalk.blue.bgBlueBright('Hello chalk'), {

    
    
    
    padding: 1,
    margin: 1
}));

write(boxen(chalk.blue.bgCyanBright('Hello chalk'), {

    padding: 1,
    margin: 1,
    borderStyle: 'double'

}));

write(boxen(chalk.blue.bgRedBright('Hello chalk'), {
    padding: 1,
    margin: 1,
    title: 'põnev', 
    titleAlignment: 'center'
}));

write(boxen(chalk.blue.bgGreenBright('Hello chalk'), {
   
    padding: 1,
    margin: 1,
    borderStyle: 'round'
  
}));

write(boxen(chalk.blue.bgBlackBright('Hello chalk'), {
    padding: 1,
    margin: 1,
    borderStyle: 'classic'
}));

write(boxen(chalk.blue.bgGreen('Hello chalk'), {
    padding: 1,
    margin: 1,
    borderStyle: 'doubleSingle',
    
}));