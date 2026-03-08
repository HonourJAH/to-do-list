"use strict";

const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const deleteTaskBtn = document.querySelector(".delete-btn");
const container = document.querySelector(".container");

addTaskBtn.addEventListener("click", function () {
  let taskInput = document.getElementById("taskInput");
  // console.log(taskInput);
  if (!taskInput.value) alert("Please, enter a task.");
  else {
    const html = `
    <li>
    <span>${taskInput.value}</span>
    <button class="delete-btn">Delete</button>
    </li>
    `;

    taskInput.value = "";
    taskList.insertAdjacentHTML("beforeend", html);
  }
  taskInput.focus();
});

// deleteTaskBtn.addEventListener("click", function () {});
