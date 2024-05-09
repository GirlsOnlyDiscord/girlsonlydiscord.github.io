document.addEventListener("DOMContentLoaded", function() {
    const todoList = document.getElementById("todo-list");
    const newTaskInput = document.getElementById("new-task");
    const addTaskBtn = document.getElementById("add-task");

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

    // Function to show the custom notification
    function showCustomNotification() {
        const notification = document.getElementById('custom-notification');
        notification.style.display = 'block';
        setTimeout(function() {
            notification.style.display = 'none';
        }, 3000); // 3 seconds
    }

    // Countdown functionality
    const startBtn = document.querySelector(".startbutton");
    const focusBtn = document.querySelector(".focusbutton");
    const breakBtn = document.querySelector(".breakbutton");
    const redoBtn = document.querySelector(".redobutton");
    const pomodoroTimer = document.getElementById("pomodoro-timer");

    let countdownInterval; // Variable to store the interval for the countdown
    let isPaused = true; // Variable to track if the countdown is paused
    let remainingTime = 25 * 60; // Variable to store the remaining time

    startBtn.addEventListener("click", function() {
        if (isPaused) {
            startCountdown();
            startBtn.textContent = "PAUSE";
        } else {
            pauseCountdown();
            startBtn.textContent = "START";
        }
        isPaused = !isPaused;
    });

    focusBtn.addEventListener("click", function() {
        if (isPaused) {
            focusBtn.style.backgroundColor = "rgb(49, 47, 81, 0.5)";
            breakBtn.style.backgroundColor = "";
            remainingTime = 25 * 60;
            pomodoroTimer.textContent = "25:00";
        }
    });

    breakBtn.addEventListener("click", function() {
        if (isPaused) {
            breakBtn.style.backgroundColor = "rgb(49, 47, 81, 0.5)";
            focusBtn.style.backgroundColor = "";
            remainingTime = 5 * 60;
            pomodoroTimer.textContent = "05:00";
        }
    });

    redoBtn.addEventListener("click", function() {
        pauseCountdown();
        startBtn.textContent = "START";
        isPaused = true;
        remainingTime = 25 * 60;
        pomodoroTimer.textContent = "25:00";
    });

    function startCountdown() {
        // Check if there's remaining time to resume from
        let timeLeft = remainingTime > 0 ? remainingTime : 25 * 60;

        // Update the countdown every second
        countdownInterval = setInterval(function() {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;

            // Display the time left
            pomodoroTimer.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

            // If countdown reaches 0, switch to break countdown
            if (timeLeft <= 0) {
                clearInterval(countdownInterval);
                if (remainingTime === 25 * 60) {
                    remainingTime = 5 * 60;
                    breakBtn.click(); // Automatically switch to break timer
                } else {
                    remainingTime = 25 * 60;
                    startBtn.textContent = "START";
                    isPaused = true;
                }
            }

            timeLeft--;
            remainingTime = timeLeft; // Store the remaining time
        }, 1000); // 1000 milliseconds = 1 second
    }

    function pauseCountdown() {
        clearInterval(countdownInterval);
    }
});
