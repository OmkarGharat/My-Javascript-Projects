function to_do_list() {
    const input = document.getElementById("input");
    const taskText = input.value.trim();
    const ul = document.getElementById("myUL");

    if (!taskText) {
        alert("Please enter a task!");
        return;
    }

    // Create list item
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    // Add task text
    li.innerHTML = `<span class="task-text">${taskText}</span>`;

    // Trash icon
    const delBtn = document.createElement("i");
    delBtn.classList.add("fas", "fa-trash", "text-danger", "me-2");
    delBtn.title = "Delete Task";
    delBtn.addEventListener("click", () => {
        const confirmDel = confirm("Are you sure you want to delete this task?");
        if (confirmDel) {
            li.remove();
        }
    });

    // Complete icon
    const completeBtn = document.createElement("i");
    completeBtn.classList.add("fas", "fa-check", "text-success");
    completeBtn.title = "Mark as Done";
    completeBtn.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    // Button container
    const btnGroup = document.createElement("div");
    btnGroup.classList.add("btn-group");
    btnGroup.appendChild(completeBtn);
    btnGroup.appendChild(delBtn);

    li.appendChild(btnGroup);

    // Append to list
    ul.appendChild(li);

    // Clear input
    input.value = "";
}
