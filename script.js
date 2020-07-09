window.onload = clickListener;
function clickListener(){
    let todoTask = document.getElementById("todoTask");
    let todoTable = document.getElementById("table");
    document.getElementById("testButton").addEventListener("click", function(){
        if (todoTask.value == null || todoTask.value == ""){
            alert("Cannot add an empty Task!");
        } else {
            let newLine = todoTable.insertRow(-1);
            let newCell = newLine.insertCell(0);
            let newCheckbox = document.createElement("input");
            let newText = document.createTextNode(" " + todoTask.value + " ");
            let newDeleteButton = document.createElement("button");
            newDeleteButton.textContent = "Delete";
            newCheckbox.type = "checkbox";
            newCell.appendChild(newCheckbox);
            newCell.appendChild(newText);
            newCell.appendChild(newDeleteButton);
            todoTask.value = null;
            newDeleteButton.addEventListener("click", function(event){
            todoTable.deleteRow(event.target.parentElement.parentElement.rowIndex);
            });
        }
    });
}
