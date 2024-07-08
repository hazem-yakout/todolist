let btn = document.querySelector("#bt");
let inp = document.querySelector("input");
let ul = document.querySelector("#tasks");

btn.onclick = function () {
  if (inp.value.length == 0) {
    alert("Please Enter a Task");
  } else {
    ul.innerHTML += `
          <div class="task">
              <li id="taskname">
        ${inp.value}
              </li>
              <button class="delete">
                 - Delete
              </button>
          </div>
      `;

    var current_tasks = document.querySelectorAll(".delete");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
};
