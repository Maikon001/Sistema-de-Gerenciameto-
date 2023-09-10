document.getElementById('taskForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
    var taskText = taskInput.value.trim();

    if (taskText !== '') {
        var li = document.createElement('li');
        li.textContent = taskText;

        var completeButton = document.createElement('button');
        completeButton.textContent = 'Concluir';
        completeButton.addEventListener('click', function () {
            li.classList.toggle('completed');
        });

        var removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.addEventListener('click', function () {
            li.parentNode.removeChild(li);
        });

        li.appendChild(completeButton);
        li.appendChild(removeButton);
        taskList.appendChild(li);
        taskInput.value = '';
    }
});

