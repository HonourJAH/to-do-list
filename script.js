"use strict";

const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const container = document.querySelector(".container");

function saveTasks() {
  const tasks = [];

  document.querySelectorAll("#taskList li").forEach((task) => {
    tasks.push({
      text: task.querySelector("span").textContent,
      completed: task.classList.contains("completed"),
    });
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => {
    const li = document.createElement("li");

    if (task.completed) {
      li.classList.add("completed");
    }

    li.innerHTML = `
      <span>${task.text}</span>
      <button class="delete-btn">Delete</button>
    `;

    document.getElementById("taskList").appendChild(li);
  });
}

function addTask() {
  const taskInput = document.getElementById("taskInput");

  if (!taskInput.value) {
    alert("Please, enter a task.");
    return;
  }

  const html = `
    <li>
      <span>${taskInput.value}</span>
      <button class="delete-btn">Delete</button>
    </li>
  `;

  taskList.insertAdjacentHTML("beforeend", html);

  taskInput.value = "";
  taskInput.focus();

  saveTasks();
}

container.addEventListener("click", function (e) {
  const target = e.target.classList.contains("delete-btn");
  if (!target) return;

  e.target.parentElement.remove();
  saveTasks();
});

container.addEventListener("click", function (e) {
  const target = e.target.tagName === "SPAN";
  if (!target) return;

  e.target.parentElement.classList.toggle("completed");
  saveTasks();
});

document.addEventListener("DOMContentLoaded", () => {
  loadTasks();
});

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});
