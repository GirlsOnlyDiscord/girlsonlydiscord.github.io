document.addEventListener("DOMContentLoaded", function() {
    const todoList = document.getElementById("todo-list");
    const newTaskInput = document.getElementById("new-task");
    const addTaskBtn = document.getElementById("add-task");


    addTaskBtn.addEventListener("click", function() {
        const taskText = newTaskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            newTaskInput.value = "";
        }
    });

    function addTask(taskText) {
        const taskItem = document.createElement("li");
        taskItem.className = "task";
        taskItem.innerHTML = `

            <div style="display: flex; align-content: center; gap: 20px;">
                 <input type="checkbox" class="checkbox" style="width: 1.3em;
                 height: 1.3em;
                 background-color: white;
                 border-radius: 50%;
                 vertical-align: middle;
                 border: 1px solid #ddd;
                 appearance: none;
                 -webkit-appearance: none;
                 outline: none;
                 cursor: pointer;">
                <span style="text-shadow: 0px 0px 15px #00022d;">${taskText}</span>
                <button class="delete-btn" style="background-color: transparent; border: none;"><img src="/focusimages/closewindow.png" style="height: 25px; cursor: pointer;"></button>
            </div>

            
        `;
        todoList.appendChild(taskItem);
        taskItem.querySelector(".delete-btn").addEventListener("click", function() {
            taskItem.remove();
        });
    }
});