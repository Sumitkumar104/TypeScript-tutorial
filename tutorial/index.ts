// typescript is just wrapeer around the javascript which give more power to javascript


let str:string="sumit"
function sum(a:number,b:number){
    return a+b;
}
console.log(sum(4444,5553));

// basic stuff 
function temp(obj:{name:string,age:number}):void{
    console.log("my name is "+obj.name+" and age is "+obj.age);
    return ;
}
temp({name:"sumit",age:23});


// return type of function is object 
function returntypeobject():{name:string,age:number}{
    return {name:"sumit",age:23};
}
let obj=returntypeobject();
console.log(obj.name+" "+obj.age);


// custom datatype
type userData={
    name:String,
    age:number,
    address:string,
    zx:boolean
}

function createUser(user:userData):void{
    console.log(user.name+" "+user.age+" "+user.address+" "+user.zx);
    return ;
}
createUser({name:"sumit",age:23,address:"delhi",zx:true});

export{} // Explicitly defining the module boundary