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
    if (rows === 0) {
        alert("Clicked Remove Row");
    }
    
    else {
        document.getElementById("grid").lastElementChild.remove();
        rows -= 1;
    }

}
//Remove a column
function removeC() {
    let cols = document.getElementsByTagName("tr");
    
    if (columns === 0) {
        alert("Clicked Remove Col");
    }
    
    else {
        for (i = 0; i < rows; i++) {
            cols[i].lastElementChild.remove();
        }
        columns -= 1;
    }
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
   let fillall = document.querySelectorAll("#grid tr td");

   for (i = 0; i < rows * columns; i++) {
    fillall[i].style.backgroundColor = colorSelected;
   }
}

function clearAll(){
    if (rows === 0 && columns === 0) {
        alert("Clicked Clear All");
    }
    
    else {
        let clear = document.querySelectorAll("#grid tr td");
        for (i = 0; i < rows * columns; i++) {
            clear[i].style.backgroundColor = "white";
           }
    }
}

function fillU(){
    let filluncolored = document.querySelectorAll("#grid tr td");
    for (i = 0; i < rows * columns; i++) {
       if (filluncolored[i].style.backgroundColor === "" || filluncolored[i].style.backgroundColor === "white") {
            filluncolored[i].style.backgroundColor = colorSelected;
       }
    }
}