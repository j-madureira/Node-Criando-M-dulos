let soma = require("./app-soma");
let mult = require("./app-mult");
let div = require("./app-div");

let args = process.argv.slice(2);

let a = Number(args[0]);
let b = '';
let c = Number(args[2]);


if(args[1] == 's'){
    b = console.log(soma(a,c));
}
else if(args[1] == 'm'){
    b = console.log(mult(a,c));
}
else if(args[1] == 'd'){
    b = console.log(div(a,c));
}

else{
    b ="Erro";
}

console.log(b);