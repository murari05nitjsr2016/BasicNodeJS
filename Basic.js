
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

function numberToDayName()
{
    const prompt = require('prompt-sync')({sigint: true});  
    let digit = prompt('Enter the digit :');
    digit = Number(digit); 
    if(digit == 1)
    { 
    console.log("MONDAY");
    }else if(digit == 2)
    {
        console.log("TUESDAY");  
    }else if(digit == 3){
        console.log("WEDNESDAY");
    }else if(digit == 4){
        console.log("THURSDAY");
    }else if(digit == 5){
        console.log("FRIDAY");
    }else if(digit == 6){
        console.log("SATURDAY");
    }else if(digit == 7){
        console.log("SUNDAY");
    }
}

function unitConversion(){
    const prompt = require('prompt-sync')({sigint: true});
    console.log("Enter 1 for Feet to Inch conversion");
    console.log("Enter 2 for Inch to Feet conversion");
    console.log("Enter 3 for Feet to Meter conversion");
    console.log("Enter 4 for Meter to Feet conversion");
    let choice = prompt('Enter your choice :');
    choice = Number(choice);
    let feet = 0;
    let inch = 0;
    let meter =0;
    switch(choice){
        
        case 1:
            console.log("hi");
             feet = prompt('Enter feet value :');
             inch = feet * 12;
            console.log('The equivalent value of',feet,' feet in inches is ',inch,);
            break;
        case 2:
            inch =  prompt('Enter inch value :');
            feet = inch/12;
            console.log('The equivalent value of',inch,' inch in feet is ',feet,);
            break;
        case 3:
             feet = prompt('Enter feet value :');
             meter = feet/3.2808 ;
            console.log('The equivalent value of',feet,' feet in meter is ',meter,);
            break;
        case 4:
            meter = prompt('Enter meter value :');
            feet = meter * 3.2808;
            console.log('The equivalent value of',meter,' meter in feet is ',feet,);
            break;
       default:
           console.log("please enter valid choice between 1 to 4");


    }

}
//numberToDayName();
unitConversion();

