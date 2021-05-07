
{
    let num1 = Math.floor(Math.random()*(999-100+1)+100);
    let num2 = Math.floor(Math.random()*(999-100+1)+100);
    let num3 = Math.floor(Math.random()*(999-100+1)+100);
    let num4 = Math.floor(Math.random()*(999-100+1)+100);
    let num5 = Math.floor(Math.random()*(999-100+1)+100);
    let max = 0;
    let min = 0;
    if(num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5)
    {
        max = num1;
        console.log(max);
    }else if(num2 > num3 && num2 > num4 && num2 > num5){
        max = num2;
        console.log(max);
    }else if(num3 > num4 && num3 > num5){
        max = num3;
        console.log(max);
    }else if(num4 > num5){
        max = num4;
        console.log(max);
    }else{
        max = num5;
        console.log(max);
    }

    if(num1 < num2 && num1 < num3 && num1 < num4 && num1 < num5)
    {
        min = num1;
        console.log(min);
    }else if(num2 < num3 && num2 < num4 && num2 < num5){
        min = num2;
        console.log(min);
    }else if(num3 < num4 && num3 < num5){
        min = num3;
        console.log(min);
    }else if(num4 < num5){
        min = num4;
        console.log(min);
    }else{
        min = num5;
        console.log(min);
    }

}

function checkLeapYear(year) {

    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

function flipCoin(){
    const IS_HEAD = 0;
    const IS_TAIL = 1;
    let probability = Math.floor(Math.random()*10)/2;
    if(probability == IS_HEAD){
        console.log("Head");
    }
    else {
        console.log("Tail");
    }
}

//flipCoin();

function digitToWord(){
    const prompt = require('prompt-sync')({sigint: true});  
    let digit = prompt('Enter the digit :');
    digit = Number(digit); 
    if(digit == 0)
    { 
    console.log("ZERO");
    }else if(digit == 1)
    {
        console.log("ONE");  
    }else if(digit == 2){
        console.log("TWo");
    }else if(digit == 3){
        console.log("THREE");
    }else if(digit == 4){
        console.log("FOUR");
    }else if(digit == 5){
        console.log("FIVE");
    }else if(digit == 6){
        console.log("SIX");
    }else if(digit == 7){
        console.log("SEVEN");
    }else if(digit == 8){
        console.log("EIGHT");
    }else{
        console.log("NINE");
    }
}
digitToWord();