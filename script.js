document.getElementById("tweet").onkeyup = function(){
    document.getElementById("charNum").innerHTML = document.getElementById("tweet").value.length;
}