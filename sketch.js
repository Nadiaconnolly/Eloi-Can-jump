
const numCoins = 10

const coins = Array.from({ length: numCoins}, (el, i) => {
    return new Coin({ x: 100 * i, y: 100 }, 200)
})
const heroMario = new Mario({x: 200, y: 280}, 120)

const eloi = new Mario({x: 200, y: 210}, 250)

function preload(){
    objectsImg = loadImage('assets/head.png')
    marioImg = loadImage('assets/mario-use.png')
    eloiImg = loadImage('assets/eloi.png')
}

function setup(){
    createCanvas(1000, 600)
    background(95, 138, 245)
    frameRate(15)

    //assign images
    
    coins.forEach( coin => coin.images = loadCoinImages(objectsImg))
    

    eloi.images = loadEloiImages(eloiImg)
    console.log(eloi.images)
    
}

function draw(){
    background(174, 176, 62)
    fill(62, 176, 130)
    //this is the ground
    rect(0, 400, 1000, 200)

    //draw the coins
    coins.forEach(coin => {
        coin.update()
        coin.render()
    })

    //draw mario
    checkKeys()
    eloi.render()
    eloi.update()

}

function checkKeys(){
    if(keyIsDown(UP_ARROW)){
        eloi.jump()
        return
    } else if(keyIsDown(LEFT_ARROW)){
        eloi.runLeft()
        return
    } else if(keyIsDown(RIGHT_ARROW)){
        eloi.runRight()
        return
    }

}


function keyReleased(){
    if(keyCode === UP_ARROW){
    eloi.clearJump()
    }
}
