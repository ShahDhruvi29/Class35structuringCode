class Game{
    constructor(){}
    
    getState(){
        var gameStateRef = database.ref('gameState')
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })
    }
//set -> only player1name, player1distance
    updateState(state){
        database.ref('/').update({
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