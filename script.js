window.onload = mainFunc;
function mainFunc() {
    let todoTask = document.getElementById("todoTask");
    let todoTable = document.getElementById("table");
    addTask();
    function addTask(){
        document.getElementById("testButton").addEventListener("click", function(){
            if (todoTask.value.trim() == ""){
                alert("Cannot add an empty Task!");
            } else {
                let newLine = todoTable.insertRow(-1);
                let newCell = newLine.insertCell(0);
                let newCheckbox = document.createElement("input");
                let newText = document.createTextNode(" " + todoTask.value + " ");
                let newDeleteButton = document.createElement("button");
                newDeleteButton.textContent = "Delete";
                newCheckbox.type = "checkbox";
                newCheckbox.className = "checkbox";
                newCell.appendChild(newCheckbox);
                newCell.appendChild(newText);
                newCell.appendChild(newDeleteButton);
                todoTask.value = null;
                newDeleteButton.addEventListener("click", function(event){
                    todoTable.deleteRow(event.target.parentElement.parentElement.rowIndex);
                });
                newCheckbox.addEventListener("click", function(event){
                    newCheckbox.disabled = true;
                    todoTable.rows[event.target.parentElement.parentElement.rowIndex].bgColor = "#386161";
                });
            }
        });
    }
}