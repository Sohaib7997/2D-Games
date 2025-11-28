
let currMoleTile,currFlowerTile,score=0,gameOver=false
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
    setInterval(setFlower,3000)
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
    if (this===currMoleTile){
        score+=10
        document.getElementById("score").innerText=score.toString()
    }
    else if(this === currFlowerTile){
        gameOver=true
    document.getElementById("score").innerText="Game Over: "+score.toString();
    }
}