const addButton = document.querySelector('#add');
const pixleHolder = document.querySelector('.pixle-holder');
const number = document.querySelector('#pick-number');
const clearButton = document.querySelector('#clear');
let blocksAdded = false; //game state - may not need this, but used it in earlier version


//Take user imput and change to and return as number
const changeToNum = () =>{
    return parseInt(number.value)
}

//Make a div and return that value to store
const makeDiv = () =>{
    const newDiv = document.createElement('div');
    return newDiv;
}

//Game Loop
const addDiv = () => {
    //Add the number of divs (boxes) based on user input
    let num = changeToNum();
    for(let i = 0; i < num; i++){
        let div = makeDiv();
    div.classList.add('square');
    pixleHolder.append(div);
    }

    //Change game state
    blocksAdded = true;

    //Get the newly created divs - need better variable name
    let divs2 = document.querySelectorAll('.square');

    //Iterate through divs2 array and listen for clicks - change div property through class
    if(blocksAdded){
        divs2.forEach(box => {
            box.addEventListener('click', () => {
                if(box.classList.contains('red')){
                    box.classList.remove('red');
                }
                else {box.classList.add('red');}
            })
        })
    }

    //clear our board
    const clearBoard = () => {
        divs2.forEach(box => {
            box.classList.remove('red');
        })
    }
    clearButton.addEventListener('click', clearBoard);
}

//Play game - need to change name to match action
addButton.addEventListener('click', addDiv);