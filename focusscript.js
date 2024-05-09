document.addEventListener("DOMContentLoaded", function() {
    const todoList = document.getElementById("todo-list");
    const newTaskInput = document.getElementById("new-task");
    const addTaskBtn = document.getElementById("add-task");
    const settingsBtn = document.querySelector(".settingsbutton");
    const settingsContainer = document.querySelector(".settingscontainer");
    const focusInput = document.getElementById("focusquantity");
    const breakInput = document.getElementById("breakquantity");

    let selectedImage = ""; // Variable to store the selected image URL

    addTaskBtn.addEventListener("click", function() {
        const taskText = newTaskInput.value.trim();
        if (taskText !== "") {
            if (todoList.children.length >= 15) {
                showCustomNotification(); // Display custom notification if limit reached
            } else {
                addTask(taskText);
                newTaskInput.value = "";
            }
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
            // Update selectedImage variable with the URL of the clicked image
            selectedImage = button.querySelector("img").src;
            // Highlight the selected image button (optional)
            imagesButtons.forEach(btn => btn.classList.remove("selected"));
            button.classList.add("selected");
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
});
