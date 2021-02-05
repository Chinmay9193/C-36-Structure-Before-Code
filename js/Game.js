class Game {
    constructor(){}

    //function to get the state of the game - read
    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }

    //function to updte the state of the game - update
    update(state){
        database.ref("/").update({
            gameState: state
        })
    }

    start(){
        if(gameState===0){
            player = new Player();
            player.getCount();
            form = new Form(); 
            form.display();   
        }
    }

}