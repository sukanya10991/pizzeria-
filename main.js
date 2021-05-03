pizzas=["Blackpink pizza",
       "Minecraft pizza",
       "Coding pizza",
       "McDonalds Pizza",
       "Ice cream pizza",
       "Paneer Pizza",
       "Reading Pizza"];
  
function getmenu(){
    var hh;    
    hh="<ol class='i_an'>";
    pizzas.sort();
    for (var o=0;o<pizzas.length;o++){
        hh=hh+'<li>'+pizzas[o]+'</li>'
    }
    hh=hh+"</ol>"
    document.getElementById("display_menu").innerHTML= hh;
    

}
function whut(){
    var strawberry;
    var add=document.getElementById("add_item").value;
    pizzas.push(add);
    hh=pizzas.sort();
    hh="<section class='cards'>";
    for(var d=0;d<pizzas.length;d++){
        strawberry=strawberry+"<div class='card'>" + "<img src='Images/pizzaImg.png'/>" + pizzas[d]+ "</div>"
    }
    strawberry=strawberry+"</section>"
    document.getElementById("display_addedmenu").innerHTML=strawberry;
    
}