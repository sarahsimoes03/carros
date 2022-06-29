class Game {
  constructor() {



    
  }
getState(){
var gameStateref=database.ref("gameState")
gameStateref.on("value",function(data){
  gameState=data.val()
})

}
update(state){
  database.ref("/").update({
    gameState:state
  })
}
  start() {
    form = new Form();
    form.display();
    player = new Player();
    playerCount=player.getCount()
    
    carro1=createSprite(width/2-50,height-100)
    carro1.addImage(carroimg1)
    carro1.scale=0.07
    carro2=createSprite(width/2+100,height-100)
    carro2.addImage(carroimg2)
    carro2.scale=0.07
    carros=[carro1,carro2]
  }
  handleElements(){
    form.hide()
    form.titleImg.position(40,50)
    form.titleImg.class("gameTitleAfterEffect")
  }
  play(){
    this.handleElements()
    Player.getPlayerInfo()
    if(allPlayers!==undefined){
      image(pista,0,-height*5,width,height*6)
      drawSprites();
    }
  }
}
