//Number guessing game

const minNum = 1;
const maxNum = 100;
const answer= Math.floor(Math.random()*(maxNum-minNum+1)+minNum);

let attempts=0;
let guess;
let running=true;

while(running){
    guess=window.prompt(`Guess a Number between ${minNum} - ${maxNum}`);
    guess=Number(guess);
    if(isNaN(guess)){
        window.alert("please enter a valid number");
    }
    else if(guess<minNum || guess>maxNum){
        window.alert("please enter number between 0-100");
    }
    else{
        attempts++;
        if(guess<answer){
            window.alert("Too Low Try Again!");
        }
        else if(guess>answer){
            window.alert("Too High Try Again!");
        }
        else{
            window.alert(`Congrats You Won You guess correct answer!${answer}.it took you ${attempts} attempts`);
             running=false;
        }
        
    }
}