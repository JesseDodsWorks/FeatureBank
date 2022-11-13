
function likedPost() {
    document.getElementById("lb").classList.toggle("liked")
    document.getElementById("lb").classList.toggle("unliked")

    if(document.getElementById("lb").classList.value == "bi bi-hand-thumbs-up liked"){
        console.log("hello")
        likeAnimate()
    }
}

function likeAnimate() {
    let spans =  document.getElementsByTagName("span");
    for(span of spans){
        span.classList.add("anim");
    }
    setTimeout(stopAnimate,500);
}

function stopAnimate() {
let spans =  document.getElementsByTagName("span");
for(span of spans){
    span.classList.remove("anim");
}
}

    // let a = document.getElementById("lb");
    // let spans =  document.getElementsByTagName("span");
    // for(span of spans){
    //     span.classList.remove("anim");
    // }