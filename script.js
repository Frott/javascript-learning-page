window.onload = mainFunc;
function mainFunc() {
    let todoTask = document.getElementById("todoTask");
    let todoTable = document.getElementById("table");
    let counter = document.getElementById("counter");
    let tasksLeft = 0;
    let tasksDone = 0;
    let firstCompleted = -1;
    addTask();
    function addTask(){
        document.getElementById("testButton").addEventListener("click", function(){
            if (todoTask.value.trim() == ""){
                alert("Cannot add an empty Task!");
            } else {
                if (todoTable.rows.length > 0){
                    for(let i = 0; i <= todoTable.rows.length; i++){
                        if(todoTable.rows[i].children[0].children[0].disabled){
                            firstCompleted = i;
                            break;
                        }
                    }
                }
                let newLine = todoTable.insertRow(firstCompleted);
                let newCell = newLine.insertCell(0);
                let newCheckbox = document.createElement("input");
                let newText = document.createTextNode(" " + todoTask.value + " ");
                let newDeleteButton = document.createElement("button");
                newDeleteButton.textContent = "Delete";
                newDeleteButton.className = "delButton"
                newCheckbox.type = "checkbox";
                newCheckbox.className = "checkbox";
                newCell.appendChild(newCheckbox);
                newCell.appendChild(newText);
                newCell.appendChild(newDeleteButton);
                todoTask.value = null;
                tasksLeft++;
                counter.rows[1].cells[1].innerHTML = tasksLeft;
                newCheckbox.addEventListener("click", function(event){
                    newCheckbox.disabled = true;
                    todoTable.rows[event.target.parentElement.parentElement.rowIndex].bgColor = "#386161";
                    tasksLeft--;
                    counter.rows[1].cells[1].innerHTML = tasksLeft;
                    tasksDone++;
                    counter.rows[1].cells[0].innerHTML = tasksDone;
                    todoTable.rows[todoTable.rows.length-1].after(event.target.parentElement.parentElement);
                });
                newDeleteButton.addEventListener("click", function(event){
                    todoTable.deleteRow(event.target.parentElement.parentElement.rowIndex);
                    if(event.target.parentElement.childNodes[0].disabled == false){
                        tasksLeft--;
                        counter.rows[1].cells[1].innerHTML = tasksLeft;
                    }
                    if (tasksDone != 0){
                        tasksDone--;
                        counter.rows[1].cells[0].innerHTML = tasksDone;
                    }
                    //console.log(event);
                });
            }
        });
    }
}