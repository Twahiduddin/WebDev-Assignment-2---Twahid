let colorSelected; 
let rows = 0;
let columns = 0;

//Adds a row
function addR() {
    //alert("Clicked Add Row")
    let grid = document.getElementById("grid");
    
    if (rows === 0 || columns === 0) {
        columns += 1;
    };
    
    let row = document.createElement("tr");
    rows += 1;

    for (let i = 0; i < columns; i++) {
        let col = document.createElement("td");
        col.onclick = function (){
            this.style.backgroundColor = colorSelected;
        };
        row.appendChild(col);
    }
    grid.appendChild(row);
}
//Adds a column
function addC() {
    //alert("Clicked Add Col")
    let cols = document.getElementsByTagName("tr");

    if (rows === 0 || columns === 0) {
        addR();
    }

    else {
        for (i = 0; i < rows; i++) {
        let add = document.createElement("td");
        add.onclick = function (){
            this.style.backgroundColor = colorSelected;
        };
        cols[i].appendChild(add);
        };
        columns+=1;
    }
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