class Sprite{
    constructor(x,y){
        this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank=null;
    }
    updateCount(count){
        database.ref('/').update({
          playerCount: count
        });
      }
      static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",(data)=>{
          allPlayers = data.val();
        })
      }
}
