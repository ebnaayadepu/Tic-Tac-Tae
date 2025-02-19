let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")
let draw = document.querySelector(".draw-container")

let turnO = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hidden")
    draw.classList.add("hidden")

}



boxes.forEach( (box) => {
    box.addEventListener("click", () =>{
      if(turnO){
        box.innerText = "X" ; 
        turnO = false;
      }else{
        box.innerText = "O"
        turnO = true;
      }
      box.disabled = true;
      

      checkWinner();
    });
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true ;
    }
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled =false ;
        box.innerText ="";

    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulation Winner is ${winner}`;
    msgContainer.classList.remove("hidden")
    disableBoxes();
}

const checkWinner = () => {
    let isDraw = true;
    for(let pattern of winPatterns){
       let pos1val = boxes[pattern[0]].innerText ;
       let pos2val = boxes[pattern[1]].innerText ;
       let pos3val = boxes[pattern[2]].innerText ;

       if(pos1val !== "" && pos2val !=="" && pos3val !==""){
        if(pos1val === pos2val && pos2val === pos3val) {
            console.log("winner",pos1val)

            showWinner(pos1val)
            return;
          }  
       }
    }
    for (let box of boxes) {
        if (box.innerText === "") {
            isDraw = false;
            break;
        }
    }

    if (isDraw) {
        draw.classList.remove("hidden")
    }
};



newGameBtn.addEventListener ("click", resetGame);
resetBtn.addEventListener ("click", resetGame)





