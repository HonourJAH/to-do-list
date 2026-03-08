"use strict";

const addtaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const ul = document.getElementsByTagName("ul");

addtaskBtn.addEventListener("click", function () {
  const taskInput = document.getElementById("taskInput").value;
  // console.log(taskInput);
  const html = `
  <li>
    <span>${taskInput}</span>
    <button class="delete-btn">Delete</button>
  </li>
  `;
});
