let colorSelected; 
let rows = 0;
let cols = 0;

//Adds a row
function addR() {
   
}
//Adds a column
function addC() {
    //alert("Clicked Add Col")
    let cols = document.getElementsByTagName("td");
    console.log(cols.length); 
}

//Removes a row
function removeR() {
    alert("Clicked Remove Row")
}
//Remove a column
function removeC() {
    alert("Clicked Remove Col")
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}