
let currMoleTile,currFlowerTile,score=0,gameOver=false,hammerHit= new Audio("../assests/hit.wav"),lose= new Audio ("../assests/lose.wav"), moleHit = false; 

window.onload =function(){
    setGame()
}

function setGame(){
    for (let i=0;i<9;i++){
        let tile=document.createElement("div")
        tile.id=i.toString()
        tile.addEventListener("click",selectTile)
        document.getElementById("board").appendChild(tile)
    }

    setInterval(setMole,1000)
    setInterval(setFlower,2000)
}


function getRandomTile(){
    let num = Math.floor(Math.random()*9)
    return num.toString()
}


function setMole(){
if (gameOver) return
    
    if(currMoleTile){
                currMoleTile.innerHTML=""
            }
        
    let mole =document.createElement("img")
    mole.src="../assests/mole.png"

    
    let num =getRandomTile()
    if(currFlowerTile && currFlowerTile.id===num){
        return
    }
    currMoleTile=document.getElementById(num)
    currMoleTile.appendChild(mole)
        moleHit = false;

}

function setFlower(){
if (gameOver) return
    
    if(currFlowerTile){
              currFlowerTile.innerHTML=""
            }
        
    let mole =document.createElement("img")
    mole.src="../assests/thorn.png"

    
    let num =getRandomTile()
    if(currFlowerTile && currMoleTile.id===num){
        return
    }

    currFlowerTile=document.getElementById(num)
    currFlowerTile.appendChild(mole)
}

function selectTile(){

    if (gameOver) return
    if (this===currMoleTile  && !moleHit){
        score+=10
        hammerHit.play()
        document.getElementById("score").innerText=score.toString()
        moleHit = true; 
    }
    else if(this === currFlowerTile){
        gameOver=true
        lose.play()
    document.getElementById("score").innerText="Game Over: "+score.toString();
    }
}