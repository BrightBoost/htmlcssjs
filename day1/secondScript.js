let colorArr = ["green", "yellow", "blue"];

function changeColor() {
    // get whatever value is selected in the input
    let colorInput = document.getElementById("backgroundColor");
    console.log(colorInput.value);
    document.body.style.backgroundColor = colorInput.value;
    // populate the empty paragraph
    let p = document.getElementById("selectedColor");
    p.innerHTML = "The selected color is " + colorInput.value;

    // create some html elements with the use of js
    let div = document.createElement("div");
    document.body.appendChild(div);
    for(let color of colorArr) {
        let p = document.createElement("p");
        p.innerText = color;
        p.style.backgroundColor = color;
        div.appendChild(p);
    }

}