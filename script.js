console.log('nawapol saeyang');
console.log('lay');


function Math(){
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let math = document.getElementById('math').value;
    let sum = 0;
    switch(math){
        case '+':
            sum = num1+num2;
            break;
        case '-':
            sum = num1-num2;
            break;
        case '*':
            sum = num1*num2;
            break;
        case '/':
            sum = num1/num2;
            break;
        default:
            sum = "input number";
            break;
    }
    console.log(sum);
}