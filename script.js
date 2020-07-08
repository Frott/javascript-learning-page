window.onload = clickListener;
function clickListener(){
    let todoTable = document.getElementById("table");
    document.getElementById("testButton").addEventListener("click", function(){
        let newLine = todoTable.insertRow(-1);
        let newCell = newLine.insertCell(0);
        let newCheckbox = document.createElement("input");
        let newText = document.createTextNode(" New Line ");
        let newDeleteButton = document.createElement("button");
        let tempRow = todoTable.rows.length;
        newDeleteButton.textContent = "Delete";
        newCheckbox.type = "checkbox";
        newCell.appendChild(newCheckbox);
        newCell.appendChild(newText);
        newCell.appendChild(newDeleteButton);
        newDeleteButton.addEventListener("click", function(tempRow){
            todoTable.deleteRow(tempRow);
        })
    });
}
