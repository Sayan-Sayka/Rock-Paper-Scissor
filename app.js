var cPoint = document.querySelector('.cPoint');
var pPoint = document.querySelector('.pPoint');
var pChoice = document.querySelector('.pChoice');
var cChoice = document.querySelector('.cChoice');
var Winner = document.querySelector('.Winner');
var pP = 0;
var cP = 0;
console.log(Winner);
function play(PlayerChoice){
    //alert(PlayerChoice);
    pChoice.innerText="Player choice: "+PlayerChoice;
    // computer -> 0,1,2  0->rock 1->scissor 2->paper
    var random = Math.floor(Math.random()*3);
    console.log(random);
    if(random==0){
        random="rock";
    }else if(random==1){
        random="scissor";
    }else{
        random="paper";
    }
    cChoice.innerText="Computer choice: "+random;
    if(PlayerChoice==random){
        Winner.innerText="Winner: Draw";
    }else if(PlayerChoice=="rock" && random=="scissor" || PlayerChoice=="scissor" && random=="paper" || PlayerChoice=="paper" && random=="rock"){
        Winner.innerText="Winner: You";
        // ++ -- -> 1iig nemj hasna
        pP++;
        pPoint.innerText="Player: "+pP;
    }else{
        Winner.innerText="Winner: Computer";
        cP++;
        cPoint.innerText="Computer: "+cP;
    }
}
function restart(){
    pP=0;
    pPoint.innerText="Player: "+pP;
    cP=0;
    cPoint.innerText="Computer: "+cP;
    pChoice.innerText="Player choice:";
    cChoice.innerText="Computer choice:";
    Winner.innerText="Winner:"
}

