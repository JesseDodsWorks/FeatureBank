
function likedPost() {
    if(document.getElementById("lb").class != "liked") {
        document.getElementById("lb").classList.toggle("unliked");
        document.getElementById("lb").classList.toggle("liked");
    
    }
    else if(document.getElementById("lb").class != "unliked"){
        document.getElementById("lb").classList.toggle("liked");
        document.getElementById("lb").classList.toggle("unliked");
    }
}