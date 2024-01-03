//setting scores
let playeryou=0;
let playercomputer=0;
let user,computer;
//accessing elements
let choices=document.querySelectorAll(".choice");
let you=document.querySelector("#you");
let comp=document.querySelector("#comp");
let msg=document.querySelector("#msg");


//adding click event ot buttons and start playgame
choices.forEach((button)=>{
    button.addEventListener("click",()=>{
        let userchoice=button.getAttribute("id");
        console.log("Your choice= ",userchoice);
        user=userchoice;
        playgame(userchoice);
    });
});

//gamelogic
const playgame=(uc)=>{
    let compchoice=computermove();
    computer=compchoice;
    console.log("Computer's choice=",compchoice);

    //draw condition
    if(uc===compchoice)
    {
        console.log("Match Draw!");
        msg.innerText="Game Draw! Play Again"
        msg.style.backgroundColor="#081b31";
    }
    else{
        //win case
        let win=true;
        if(uc==="rock")
        win= compchoice==="paper"? false:true; 
        else if(uc==="paper")
        win= compchoice==="scissors"? false:true;
        else
        win= compchoice==="rock"? false:true;

        //call win
        winner(win);
    }
};

//computer's move
const computermove=()=>{
    const arr=["rock","paper","scissors"];
    const rand=Math.floor(Math.random()*3);
    return arr[rand];
};

//winner function
const winner=(iswin)=>{
    if(iswin===true)
    {
        console.log("You Win!")
        playeryou++;
        you.innerText=playeryou;
        msg.innerText=`You Win! Your ${user} defeats computer's ${computer}`;
        msg.style.backgroundColor="green";
    }
    else{
        console.log("Computer Win!");
        playercomputer++;
        comp.innerText=playercomputer;
        msg.innerText=`You Lose! Computer's ${computer} defeats your ${user}`;
        msg.style.backgroundColor="red";
    }
};

//reset button
let reset=document.querySelector(".reset");
reset.addEventListener("click",()=>{
    console.log("Scores are reset");
    resetscores();
});

//reset the scores
const resetscores=()=>{
    playeryou=0;
    playercomputer=0;
    you.innerText=0;
    comp.innerText=0;
    msg.innerText="Place your move";
    msg.style.backgroundColor="#081b31";
}