let buttonPresses = 0;
function buttonPressed(){
  buttonPresses++;
  console.log('Button Pressed ' + buttonPresses + ' times');
}

function HelloWorld()
    {
      alert('Hello World');
      buttonPressed();
    }

function askForANumber(){
  let value = prompt('Enter a number');
  console.log('You entered ' + value+ ", its factorial is " + factorial(value));//if we press cancel, it will return null. if we press ok without entering anything, it will return an empty string ''   

}
console.log(factorial(5));
function factorial(n){
  if(n === 0){
    return 1;
  }
  else{
    return n * factorial(n-1);
  }
}
