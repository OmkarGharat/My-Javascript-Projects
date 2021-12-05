let to_do_list = () => {

    let ul = document.getElementById('myUL');
    let li = document.createElement('li');
    let input_value = document.getElementById('input').value;

    let text_value = document.createTextNode(input_value);
    li.appendChild(text_value);

    let delBtn = document.createElement('i');
    delBtn.classList.add("fas", "fa-trash");
    li.appendChild(delBtn);

    delBtn.addEventListener('click', () => {
        
        confirmation = confirm('Are you sure do you want to delete ? ');

        if (confirmation) {
            li.remove();
        }

    });

    let completeBtn = document.createElement('i');
    completeBtn.classList.add("fas", "fa-check");
    li.appendChild(completeBtn);

    completeBtn.addEventListener('click', () => {

        li.style.backgroundColor = "#1b173f";
        li.style.textDecoration = "line-through";
        completeBtn.style.color = "#5cff70";
        delBtn.style.color = "#ff7171";

    });

    if (input_value == "") {
        alert('Task cannot be empty');
    } else {
        ul.appendChild(li);
    }

    document.getElementById("input").value = "";

};