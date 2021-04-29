
// function generates the computer number
function create (array=[]) {
    // array = [1,1,1,1,1]
    for (i=0;i<3;i++){
        array.push(Math.floor(Math.random()*4))}
        // alert(array);
    return array}

//Function takes the user input
function input(array=[]) {
    return prompt('* Please enter 3 numbers (without empty space)\n * Range --> 0-3').split('').map(x => Number(x));
    // return [1,1,1,6,6]
}

//function compares the results
function control(player,computer,counter1=[0], counter2=0) {
    let position; 
    let copy = []
    computer.forEach(x => copy.push(x));
 
    // Checking how many correct number found    
    player.forEach(x => {
        position = -1;
        position = copy.indexOf(x) 
        if (position > -1) {
            copy.splice(position,1)
            counter1[0]+=1 
            }
        })
    // Checking how many numbers have the correct position
    player.forEach((element,index) => {
        element == computer[index] ? ++counter2 : counter2
        });
    counter1.push(counter2);
    return (counter1)
}


//function for the game (calling the other functions)
function play(callbackCreate, callbackInput,callbackControl) {
    alert('This is an easy mastermind clone, the Computer takes 3 numbers between 0-3.\n\n You have to find the correct numbers in the correct order.\n\n For this you have 5 tries! \n\n But first start with a free shot')
    let playerArray = callbackInput() //Getting the user input
    let computerArray = callbackCreate(); // pick a random number for computer
    let result =[];
    result = callbackControl(playerArray,computerArray) // print the first result
 
    //here starts the 5 times looping
    for (i=0; i<5;i++) {
        if (result[0] == 3 && result[1] == 3){
            alert('You won!!!!')
            break
        }
        else {
            alert(`You found ${result[0]} similar numbers at ${result[1]} similar postions.\n\nyou have ${5-i} tries left`);
            playerArray = callbackInput();  
            result = callbackControl(playerArray,computerArray)
            } 
    }
    if (result[0] != 3 || result[1] != 3){
        alert('You lost')
    }
}

//calling the function
play(create,input,control);

