window.onload = mainFunc;

function mainFunc() {
    let todoTask = document.getElementById("todoTask");
    let todoTable = document.getElementById("table");
    let counter = document.getElementById("counter");
    let tasksLeft = 0;
    let tasksDone = 0;
    let firstCompleted = -1;
    let colorpicker = document.getElementById("colorpicker");
    let selectedRow;
    colorpicker.children[0].addEventListener("click", function(clickEvent){
        //console.log(event);
        selectedRow.setAttribute("style", "border-left: 4px solid red;")
        colorpicker.style.display = "none";
    });
    colorpicker.children[1].addEventListener("click", function(clickEvent){
        //console.log(event);
        selectedRow.setAttribute("style", "border-left: 4px solid darkgreen;")
        colorpicker.style.display = "none";
    });
    colorpicker.children[2].addEventListener("click", function(clickEvent){
        //console.log(event);
        selectedRow.setAttribute("style", "border-left: 4px solid white;")
        colorpicker.style.display = "none";
    });
    addTask();
    function addTask(){
        document.getElementById("testButton").addEventListener("click", function(){
            if (todoTask.value.trim() == ""){
                alert("Cannot add an empty Task!");
            } else {
                if (todoTable.rows.length > 0){
                    for(let i = 0; i <= todoTable.rows.length - 1; i++){
                        if(todoTable.rows[i].children[0].children[0].disabled == true){
                            firstCompleted = i;
                            break;
                        }
                    }
                }
                let newLine = todoTable.insertRow(firstCompleted);
                let newCell = newLine.insertCell(0);
                let newCheckbox = document.createElement("input");
                let newText = document.createElement("span");
                let newDeleteButton = document.createElement("input");
                let newColorChange = document.createElement("input");
                newDeleteButton.type = 'image';
                newDeleteButton.src = 'content\\delete.png'
                newDeleteButton.className = "delButton"
                newCell.className = "tasks";
                newCheckbox.type = "checkbox";
                newCheckbox.className = "checkbox";
                newText.className = 'newText';
                newText.innerHTML = " " + todoTask.value + " "
                newColorChange.className = 'colButton';
                newColorChange.type = 'image';
                newColorChange.src = 'content\\colorpick.png'
                newCell.appendChild(newCheckbox);
                newCell.appendChild(newText);
                newCell.appendChild(newColorChange);
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
                    } else {
                        if (tasksDone != 0){
                            tasksDone--;
                            counter.rows[1].cells[0].innerHTML = tasksDone;
                        }
                    }
                    //console.log(event);
                });
                newColorChange.addEventListener("click", function(event){
                    colorpicker.style.display = "flex";
                    selectedRow = event.target.parentElement;
                });
            }
        });
    }
}
