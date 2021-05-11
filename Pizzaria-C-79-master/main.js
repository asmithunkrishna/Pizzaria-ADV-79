var array = ["Pizza 5","Pizza 2","Pizza 3","Pizza 4"];


function menu(){
console.log(array);
array.sort();
console.log(array);
var htmldata = "<ol>";
for (var i = 0; i < array.length; i++  ){
    htmldata = htmldata + "<li>" + array[i]  + "</li>" ;


}
htmldata = htmldata + "</ol>";
document.getElementById("menu_div").innerHTML = htmldata;
}
function add_item(){
    var add = document.getElementById("add_item").value;
    array.push(add);
    array.sort();
    console.log(array);
    var htmldata = "<section class='cards'> ";
    for (var i = 0; i < array.length; i++ ){
    htmldata = htmldata + "<div class='card'>" + "<img src='images/pizzaImg.png'>" + array[i] + "</div>";
    
    }
    htmldata = htmldata + "</section>";
    document.getElementById("display_addedmenu").innerHTML = htmldata;
}

