
function likedPost() {
    document.getElementById("lb").classList.toggle("liked")
    document.getElementById("lb").classList.toggle("unliked")

    if(document.getElementById("lb").classList.value == "bi bi-hand-thumbs-up liked"){
        likeAnimate()
    }
}

function likeAnimate() {
    let spans =  document.getElementsByTagName("span");

    for(span of spans){
        console.log(span.classList.value)
        if(span.classList.value == "pink"){
            span.classList.add("anim_1");
        }
        if(span.classList.value == "green"){
            span.classList.add("anim_2");
        }
        if(span.classList.value == "orange"){
            span.classList.add("anim_3");
        }
    }
    setTimeout(stopAnimate,500);
}

function stopAnimate() {
let spans =  document.getElementsByTagName("span");
for(span of spans){
    span.classList.remove("anim_1");
    span.classList.remove("anim_2");
    span.classList.remove("anim_3");
}
}
