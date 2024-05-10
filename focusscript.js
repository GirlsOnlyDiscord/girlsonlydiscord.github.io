document.addEventListener("DOMContentLoaded", function() {
    const todoList = document.getElementById("todo-list");
    const newTaskInput = document.getElementById("new-task");
    const addTaskBtn = document.getElementById("add-task");
    const settingsBtn = document.querySelector(".settingsbutton");
    const settingsContainer = document.querySelector(".settingscontainer");
    const focusInput = document.getElementById("focusquantity");
    const breakInput = document.getElementById("breakquantity");
    const timerSound = new Audio('focusimages/notification.mp3');

    let selectedImage = ""; // Variable to store the selected image URL

    // Function to add task
    function addTaskFromInput() {
        const taskText = newTaskInput.value.trim();
        if (taskText !== "") {
            if (todoList.children.length >= 15) {
                showCustomNotification(); // Display custom notification if limit reached
            } else {
                addTask(taskText);
                newTaskInput.value = "";
            }
        }
    }

    // Event listener for clicking the "Add Task" button
    addTaskBtn.addEventListener("click", addTaskFromInput);

    // Event listener for pressing the Enter key
    newTaskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTaskFromInput();
        }
    });

    // Function to handle task editing
    function editTask(taskItem) {
        const taskText = taskItem.querySelector("span");
        const editText = document.createElement("input");
        editText.type = "text";
        editText.className = "edit-field";
        editText.value = taskText.textContent;
        editText.style.width = taskText.offsetWidth + "px";
        // Set font style to match the original task
        editText.style.fontFamily = window.getComputedStyle(taskText).fontFamily;
        editText.style.fontSize = window.getComputedStyle(taskText).fontSize;
        editText.style.color = "white";
        // Remove border from input field
        editText.style.border = "none";
        taskText.replaceWith(editText);
        editText.focus();

        // Event listener to save changes on pressing Enter
        editText.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                taskText.textContent = editText.value;
                editText.replaceWith(taskText);
            }
        });
    }
    
    // Event listener to handle task editing on click
    todoList.addEventListener("click", function(event) {
        const target = event.target;
        if (target.tagName === "SPAN") {
            editTask(target.closest(".task"));
        }
    });

    function addTask(taskText) {
        const taskItem = document.createElement("li");
        taskItem.className = "task";
        taskItem.innerHTML = `
            <div style="display: flex; align-content: center; gap: 8px;">
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
                <span style="text-shadow: 0px 0px 15px #00022d; margin-bottom: 10px;">${taskText}</span>
                <button class="delete-btn" style="background-color: transparent; border: none;"><img src="/focusimages/closewindow.png" style="height: 25px; cursor: pointer;"></button>
                <button class="subtask-btn" style="background-color: transparent; border: none;"><img src="/focusimages/subtask.png" style="height: 25px; cursor: pointer;"></button>
            </div>
        `;
        todoList.appendChild(taskItem);

        // Store references to the parent task and its associated subtasks
        taskItem.subtasks = [];

        taskItem.querySelector(".delete-btn").addEventListener("click", function() {
            taskItem.remove();
            // Delete all subtasks associated with the deleted task
            taskItem.subtasks.forEach(subtask => subtask.remove());
        });

        // Add event listener for adding subtasks
        taskItem.querySelector(".subtask-btn").addEventListener("click", function() {
            addSubtask(taskItem);
        });
    }

    // Function to add a subtask
    function addSubtask(parentTask) {
        const subtaskText = " "; // You can define the subtask text here or fetch it from the user
        const subtaskItem = createSubtaskElement(subtaskText);
        parentTask.insertAdjacentElement("afterend", subtaskItem);
        // Add the subtask reference to the parent task
        parentTask.subtasks.push(subtaskItem);
        // Focus on the input field of the newly added subtask
        const inputField = subtaskItem.querySelector("span");
        inputField.focus();
    }

    // Function to create a new subtask element
    function createSubtaskElement(subtaskText) {
        const subtaskItem = document.createElement("li");
        subtaskItem.className = "subtask";
        subtaskItem.innerHTML = `
            <div style="display: flex; align-content: center; gap: 8px; margin-left: 25px;">
                <input type="checkbox" class="checkbox" style="width: 1em;
                    height: 1em;
                    background-color: white;
                    border-radius: 50%;
                    vertical-align: middle;
                    border: 1px solid #ddd;
                    appearance: none;
                    -webkit-appearance: none;
                    outline: none;
                    cursor: pointer;">
                <span style="text-shadow: 0px 0px 15px #00022d; font-size: 18px;">${subtaskText}</span>
                <button class="delete-btn" style="background-color: transparent; border: none;"><img src="/focusimages/closewindow.png" style="height: 20px; cursor: pointer;"></button>
            </div>
        `;
        // Attach event listeners for subtask actions (e.g., editing, deleting)
        attachSubtaskActions(subtaskItem);
        return subtaskItem;
    }

    // Function to attach event listeners for subtask actions
    function attachSubtaskActions(subtaskItem) {
        subtaskItem.querySelector(".delete-btn").addEventListener("click", function() {
            subtaskItem.remove();
        });

        // You can add more event listeners here as needed (e.g., for editing)
        subtaskItem.addEventListener("mouseenter", function() {
            subtaskItem.querySelector(".delete-btn").style.display = "block";
        });

        subtaskItem.addEventListener("mouseleave", function() {
            subtaskItem.querySelector(".delete-btn").style.display = "none";
        });

        subtaskItem.addEventListener("click", function(event) {
            if (event.target.tagName === "SPAN") {
                editTask(subtaskItem);
            }
        });
    }

    function showCustomNotification() {
        const notification = document.getElementById('custom-notification');
        notification.style.display = 'block';
        setTimeout(function() {
            notification.style.display = 'none';
        }, 3000); // 3 seconds
    }

    const startBtn = document.querySelector(".startbutton");
    const focusBtn = document.querySelector(".focusbutton");
    const breakBtn = document.querySelector(".breakbutton");
    const redoBtn = document.querySelector(".redobutton");
    const pomodoroTimer = document.getElementById("pomodoro-timer");

    let countdownInterval;
    let isPaused = true;
    let isFocus = true;
    let remainingTime = isFocus ? 25 * 60 : 5 * 60;

    startBtn.addEventListener("click", function() {
        if (isPaused) {
            startCountdown();
            startBtn.textContent = "PAUSE";
            if (isFocus) {
                focusBtn.style.backgroundColor = "#ffdbb152";
            } else {
                breakBtn.style.backgroundColor = "#ffdbb152";
            }
        } else {
            pauseCountdown();
            startBtn.textContent = "START";
        }
        isPaused = !isPaused;
    });

    focusBtn.addEventListener("click", function() {
        if (isPaused) {
            isFocus = true;
            focusBtn.style.backgroundColor = "#ffdbb152";
            breakBtn.style.backgroundColor = "";
            remainingTime = parseInt(focusInput.value) * 60 || 25 * 60;
            pomodoroTimer.textContent = formatTime(remainingTime);
        }
    });

    breakBtn.addEventListener("click", function() {
        if (isPaused) {
            isFocus = false;
            breakBtn.style.backgroundColor = "#ffdbb152";
            focusBtn.style.backgroundColor = "";
            remainingTime = parseInt(breakInput.value) * 60 || 5 * 60;
            pomodoroTimer.textContent = formatTime(remainingTime);
        }
    });

    redoBtn.addEventListener("click", function() {
        pauseCountdown();
        startBtn.textContent = "START";
        isPaused = true;
        if (isFocus) {
            remainingTime = parseInt(focusInput.value) * 60 || 25 * 60;
            pomodoroTimer.textContent = formatTime(remainingTime);
        } else {
            remainingTime = parseInt(breakInput.value) * 60 || 5 * 60;
            pomodoroTimer.textContent = formatTime(remainingTime);
        }
    });

    // Event listener for images buttons
    const imagesButtons = document.querySelectorAll(".imagesbutton");
    imagesButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Remove border from all image buttons
            imagesButtons.forEach(btn => btn.style.border = "none");
            // Update selectedImage variable with the URL of the clicked image
            selectedImage = button.querySelector("img").src;
            // Highlight the selected image button (optional)
            imagesButtons.forEach(btn => btn.classList.remove("selected"));
            button.classList.add("selected");
            // Add border to the selected image button
            button.style.border = "4px solid white";
        });
    });

    const saveBtn = document.getElementById("save");
    saveBtn.addEventListener("click", function() {
        // Update focus and break timers
        remainingTime = parseInt(focusInput.value) * 60 || 25 * 60;
        pomodoroTimer.textContent = formatTime(remainingTime);
        // Set background image to the selected image
        document.querySelector(".bgfr").style.backgroundImage = `url(${selectedImage})`;
        // Hide settings container
        settingsContainer.style.display = "none";
    });

    function startCountdown() {
        countdownInterval = setInterval(function() {
            remainingTime--;

            pomodoroTimer.textContent = formatTime(remainingTime);

            if (remainingTime <= 0) {
                clearInterval(countdownInterval);
                isFocus = !isFocus;
                if (isFocus) {
                    remainingTime = parseInt(focusInput.value) * 60 || 25 * 60;
                    focusBtn.style.backgroundColor = "#ffdbb152";
                    breakBtn.style.backgroundColor = "";
                } else {
                    remainingTime = parseInt(breakInput.value) * 60 || 5 * 60;
                    breakBtn.style.backgroundColor = "#ffdbb152";
                    focusBtn.style.backgroundColor = "";
                }
                timerSound.play();
                startCountdown();
            }
        }, 1000);
    }

    function pauseCountdown() {
        clearInterval(countdownInterval);
    }

    function formatTime(seconds) {
        let minutes = Math.floor(seconds / 60);
        let remainingSeconds = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    }

    // Add event listener to settings button
    settingsBtn.addEventListener("click", function() {
        // Toggle the display of settings container
        if (settingsContainer.style.display === "none" || settingsContainer.style.display === "") {
            settingsContainer.style.display = "flex";
            // Set default values for focus and break fields
            focusInput.value = 25;
            breakInput.value = 5;
        } else {
            settingsContainer.style.display = "none";
        }
    });

    // Get the upload button and the input element
    const uploadBtn = document.getElementById("upload");
    const uploadInput = document.getElementById("upload-background");

    // Add an event listener to the upload button
    uploadBtn.addEventListener("click", function() {
        // Simulate click on the hidden file input element
        uploadInput.click();
    });

    // Add an event listener to the input element for file selection
    uploadInput.addEventListener("change", function() {
        // Get the selected file
        const file = uploadInput.files[0];

        // Check if a file was selected
        if (file) {
            // Create a FileReader object to read the file
            const reader = new FileReader();

            // Define what happens when the file is loaded
            reader.onload = function(e) {
                // Set the background image of the container to the selected image
                document.querySelector(".bgfr").style.backgroundImage = `url(${e.target.result})`;
                // Set the selectedImage variable to the selected image URL
                selectedImage = e.target.result;
            };

            // Read the file as a data URL (base64 encoded)
            reader.readAsDataURL(file);
        }
    });

    // Event listener for checkbox state changes in both tasks and subtasks
    todoList.addEventListener("change", function(event) {
        const target = event.target;
        if (target.type === "checkbox" && (target.closest(".task") || target.closest(".subtask"))) {
            const isChecked = target.checked;
            // If the checkbox belongs to a parent task
            if (target.closest(".task")) {
                // Update the style of parent task text
                const taskText = target.nextElementSibling;
                if (isChecked) {
                    taskText.style.textDecoration = "line-through";
                } else {
                    taskText.style.textDecoration = "none";
                }
                // Loop through all subtasks of the parent task and update their styles
                const parentTask = target.closest(".task");
                parentTask.subtasks.forEach(subtask => {
                    const subtaskCheckbox = subtask.querySelector(".checkbox");
                    const subtaskText = subtask.querySelector("span");
                    if (isChecked) {
                        subtaskCheckbox.checked = true;
                        subtaskText.style.textDecoration = "line-through";
                    } else {
                        subtaskCheckbox.checked = false;
                        subtaskText.style.textDecoration = "none";
                    }
                });
            } else { // If the checkbox belongs to a subtask
                // Update the style of subtask text
                const subtaskText = target.nextElementSibling;
                if (isChecked) {
                    subtaskText.style.textDecoration = "line-through";
                } else {
                    subtaskText.style.textDecoration = "none";
                }
            }
        }
    });

});
