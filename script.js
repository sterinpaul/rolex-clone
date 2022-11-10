


function hamburg(){
    let color = document.getElementById("nav-bar").style.backgroundColor;
    if(color!="white"){
        document.getElementById("nav-bar").style.backgroundColor = "white";
        document.getElementById("search-selection").style.display = "flex";
        document.getElementById("logo").style.display = "block";
    }else{
        document.getElementById("nav-bar").style.backgroundColor = "transparent";
        document.getElementById("search-selection").style.display = "none";
        document.getElementById("menu").style.visibility = "hidden";
        document.getElementById("logo").style.display = "none";
    }
}
