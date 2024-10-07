let num1 = document.getElementById('inputBox');

function guessNum(){
    let num2 = Math.floor(Math.random() * 10);
    if(num1.value == num2){
        alert('You have guessed the correct number');
    }else{
        alert('You have guessed the wrong number');
    }
   
    num1.value = '';
}

