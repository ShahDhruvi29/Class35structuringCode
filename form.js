class Form{
    constructor(){}
    display(){
        //HTML- HyperText Markup language
        //createButton('button_name')
        //createElement('h3') -> message, geeeting, headings
        //createInput("class")
        var title=createElement('h1')
        title.html("Car Racers")
        title.position(500,10)
        var input=createInput("name")
        input.position(510,200)
        var button=createButton('play')
        button.position(570,240)
         var greeting=createElement('h3')
        button.mousePressed(function (){
            input.hide();
            button.hide();

            var name = input.value();
            playerCount = playerCount+1;
            player.update(name)
            player.updateCount(playerCount)
           greeting.html("HI :" +name)
           greeting.position(550,200)
        });
    }
  
}