var container_2 = document.getElementsByClassName("container_2")[0];
var container_3 = document.getElementsByClassName("container_3")[0];

var goCheck = document.getElementById("go-check");
var wrongCheck = document.getElementById("wrong-check");
var i = 0;

goCheck.addEventListener("click", function(){
   note(); 
})

wrongCheck.addEventListener("click", function(){
    newNote();
})

function newNote(){
    if(container_3.style.display == "none") {
        container_3.style.display = "block";
    }
    else {
        container_3.style.display = "none";
    }
}
function note(){
    var textNote = document.getElementById("text-note").value;
    var node_0 = document.createElement("div");
    var node_1 = document.createElement("h1");

    node_1.innerHTML = textNote;
    node_1.setAttribute("style", "width:200px; height:200px; font-size: 25px; padding:25px; margin-top:10px; overflow: hidden; box-shadow: 5px 5px 1px 1px rgba(0, 0, 255, .2);")
    node_1.style.margin = margin();
    node_1.style.transform = rotate();
    node_1.style.background = colour();

    node_0.appendChild(node_1);

    container_2.insertAdjacentElement("beforeend", node_0);

    node_0.addEventListener("mouseenter", function(){
        node_0.style.transform = "scale(1.1)";
    })

    node_0.addEventListener("mouseleave", function(){
        node_0.style.transform = "scale(1)";
    })

    node_0.addEventListener("dblclick", function(){
        node_0.remove();
    })

    document.getElementById("text-note").value = ""; 


}

function rotate(){
    var rotateRandom = ["rotate(1deg)", "rotate(2deg)", "rotate(3deg)", "rotate(4deg)", "rotate(-1deg)", "rotate(-2deg)", "rotate(-3deg)","rotate(-5deg)",]
    return rotateRandom[Math.floor(Math.random()* rotateRandom.length)];
}

function margin(){
    var randomMargin = ["1px", "-6px", "6px", "10px", "-5px", "20px"];
    return randomMargin[Math.floor(Math.random()* randomMargin.length)];

}

function colour(){
    var colourRandom = ["#FF7EB9", "#FF65A3", "#7AFCFF", "#FEFF9C", "#FFF740"];
    if (i > colourRandom.length - 1) {
        i = 0;
    }
    return colourRandom[i++];

}