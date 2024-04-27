interface user{
    readonly dbid:number,
    name:string,
    age:number,
    email:string
}

const user1:user={
    dbid:12e32,
    name:"sumit",
    age:25,
    email:"hiqwe@gmail.com"

}
// user1.dbid=123; it show me error because it is readonly property






//                                    >>>>> Generic in typescript  <<<<<<<
// https://www.typescriptlang.org/docs/handbook/2/generics.html




// union type
function temp3(arg:string|number):string|number{
    return arg;
}


// any type
function temp2(arg:any):any{
    return "dsffv";
}  // it will return the any type of data .



// generic
function temp1<sametype>(arg:sametype):sametype{
    return arg;
}  // it will return the same type of data type which we pass in the argument


temp1("str");  // it will return the string type of data

temp1(5);  // it will return the number type of data




// generic in array and arrow function

// there are two type to define the array 1. arg:type[]  2. Array<type>    , here type be a type of array like number,string ,boolean etc
function temp4<type>(arg:Array<type>):Array<type>{
    return arg;
}

function temp5<type>(arg:type[]):type[]{
    return arg;
}

// by use of type it already define that return type is array of wordtype.
function temp55<wordtype>(arg:wordtype[]){

    console.log(arg.length)
    return arg;
}


const temp6=<type>(arg:type):type=>{
    return arg;
}