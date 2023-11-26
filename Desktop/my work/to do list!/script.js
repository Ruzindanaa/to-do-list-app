const inputBox = document.getElementById("input-box");
const priorityInput = document.getElementById("priority-input");
const listcontainer = document.getElementById("list-container");


// create addtask function
function addTask() {
  if (inputBox.value === "") {
    alert("Giricyo wandika/you must write something!");
  } else {
    let li = document.createElement("li");

    // Get the priority value from the select dropdown
    let priority = priorityInput.value || "No Priority";

    // Set the innerHTML of the li to include both priority and task description
    li.innerHTML = `<span class="priority"></span> ${inputBox.value}`;

    // Append the li to the list container
    listcontainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    listcontainer.insertBefore(li, listcontainer.firstChild);

    // Highlight high-priority tasks
    if (priority === "1") {
      li.classList.add("high-priority");
    }
  }

  inputBox.value = "";      // Clear the add task input
  priorityInput.value = ""; // Clear the priority input
  saveData();                  
}

listcontainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listcontainer.innerHTML);
}

function showTask() {
  listcontainer.innerHTML = localStorage.getItem("data");
}

showTask();
