
// QUOTE CALCULATOR
const form = document.getElementById("form");
const spaceWidth = document.getElementById("spaceWidth");
const spaceHeight = document.getElementById("spaceHeight");
const calculate = document.getElementById("calculate");


function quote(x,y) {
    const output = document.getElementById("output");
    const totalArea = x.value * y.value;
    const panelSize = 1.7;
    const noOfPanels = parseInt(totalArea / panelSize);
    output.innerHTML = `Your total roof area is ${totalArea} square meters.<br>You can have a total of ${noOfPanels} panels.<br>Your estimated installation cost is £${noOfPanels * 400}.`;
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    quote(spaceWidth, spaceHeight);
})