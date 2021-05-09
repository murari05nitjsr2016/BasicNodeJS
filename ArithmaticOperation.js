const prompt = require('prompt-sync')({sigint: true});  
let a = prompt('Enter the value of a :');
a = Number(a);
let b = prompt('Enter the value of b :');
b = Number(b);
let c = prompt('Enter the value of c :');
c = Number(c);
let valueOfExp1 = a + b * c;
let valueOfExp2 = c + a/b;
let valueOfExp3 = a % b + c;
let valueOfExp4 = a * b + c;
function maximum(){
if(valueOfExp1 > valueOfExp2 && valueOfExp1 > valueOfExp3 && valueOfExp1 >valueOfExp4)
{
   console.log('Maximum value exp a + b * c and value is',valueOfExp1,);
}else if(valueOfExp2 > valueOfExp3 && valueOfExp2 > valueOfExp4)
{
    console.log('Maximum value exp c + a/b and value is',valueOfExp2,);
}else if(valueOfExp3 > valueOfExp4)
{
    console.log('Maximum value exp a % b + c and value is',valueOfExp3,);
}else{
    console.log('Maximum value exp a * b + c and value is',valueOfExp4,);
}

}
function minimum(){
    if(valueOfExp1 < valueOfExp2 && valueOfExp1 < valueOfExp3 && valueOfExp1 < valueOfExp4){
        console.log('Minimum value exp a + b * c and value is',valueOfExp1,);  
    }else if(valueOfExp2 < valueOfExp3 && valueOfExp2 < valueOfExp4){
        console.log('Minimum value exp c + a/b and value is',valueOfExp2,);
    }else if(valueOfExp3 < valueOfExp4){
        console.log('Minimum value exp a % b + c and value is',valueOfExp3,);  
    }else{
        console.log('Minimum value exp a * b + c and value is',valueOfExp4,);
    }

}
maximum();
minimum();