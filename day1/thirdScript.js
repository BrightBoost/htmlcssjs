window.onload = function(){
    document.getElementById("sayhi").addEventListener("click", hello);
}

function hello() {
    alert("Hello!");
    let blaElements = document.getElementsByClassName("bla");
    for(let element of blaElements) {
        element.innerHTML = "new bla!";
    }
}

const hi = () => alert("Hello!");
const hi2 = (name) => alert("Hello " + name);

let list = ["green", "blue", "purple", "berryblue"];

let filteredList = list.filter(color => color.startsWith("b"));
console.log(filteredList);

