interface User{
    firstname: string,
    lastName: string,
    age: number
}

function isLegal(user: User){
    if(user.age>18)return true;
    return false;
}

console.log(isLegal({
    firstname:"nishu",
    lastName:"raj",
    age:20
}))