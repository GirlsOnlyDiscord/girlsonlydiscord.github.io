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

        // Add event listener for task editing
        taskItem.querySelector("span").addEventListener("click", function() {
            editTask(taskItem);
        });
    }

    function showCustomNotification() {
        const notification = document.getElementById('custom-notification');
        notification.style.display = 'block';
        setTimeout(function() {
            notification.style.display = 'none';
        }, 3000); // 3 seconds
    }

    // Function to edit task
    function editTask(taskItem) {
        const taskTextElement = taskItem.querySelector("span");
        const taskText = taskTextElement.textContent;
        const inputField = document.createElement("input");
        inputField.type = "text";
        inputField.value = taskText;
        inputField.style.width = "calc(100% - 40px)"; // Adjust the width as needed
        inputField.style.border = "none";
        inputField.style.fontSize = "inherit";
        inputField.style.fontWeight = "inherit";
        inputField.style.fontFamily = "inherit";
        inputField.style.color = "inherit";
        inputField.style.textShadow = "inherit";
        inputField.style.background = "inherit";
        inputField.style.padding = "0";
        inputField.style.margin = "0";
        inputField.style.outline = "none";

        inputField.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                taskTextElement.textContent = inputField.value;
                inputField.remove(); // Remove the input field after saving the task
            }
        });

        inputField.addEventListener("blur", function() {
            taskTextElement.textContent = inputField.value;
            inputField.remove(); // Remove the input field if focus is lost without saving
        });

        taskTextElement.textContent = "";
        taskTextElement.appendChild(inputField);
        inputField.focus();
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
        // Close settings modal
        settingsContainer.style.display = "none";
    });

    function startCountdown() {
        countdownInterval = setInterval(function() {
            remainingTime--;
            if (remainingTime === 0) {
                timerSound.play();
                if (isFocus) {
                    remainingTime = parseInt(breakInput.value) * 60 || 5 * 60;
                    pomodoroTimer.textContent = formatTime(remainingTime);
                    isFocus = false;
                    focusBtn.style.backgroundColor = "";
                    breakBtn.style.backgroundColor = "#ffdbb152";
                } else {
                    remainingTime = parseInt(focusInput.value) * 60 || 25 * 60;
                    pomodoroTimer.textContent = formatTime(remainingTime);
                    isFocus = true;
                    focusBtn.style.backgroundColor = "#ffdbb152";
                    breakBtn.style.backgroundColor = "";
                }
            } else {
                pomodoroTimer.textContent = formatTime(remainingTime);
            }
        }, 1000);
    }

    function pauseCountdown() {
        clearInterval(countdownInterval);
    }

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }
});
