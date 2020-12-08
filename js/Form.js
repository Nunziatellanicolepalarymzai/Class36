class Form{

constructor(){



}
display(){

var title=createElement('h2')
title.html("Car Racing Game")
title.position(130,20);

var input=createInput("Name");
input.position(130,160);

var button=createButton('Play')
button.position(250,200)

button.mousePressed(function(){
input.hide();
button.hide();
var Name=input.value();
var greeting=createElement('h3')
greeting.html("hello  "+Name )

playerCount+=1;
player.update(Name);
player.updateCount(playerCount);


});


}


}