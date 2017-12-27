//Inferência de tipos
//Can pass the 'any' as paramater that can be anytype
function log(message:any) {
    console.log(message);
}

log('Hello World TypeScript!');

let test: Array<string> = ['olá', 'teste'];
let isActive: boolean = true;
let test2: [string] = ['test'];

/*Types 
string
number
boolean
arrays
...
*/