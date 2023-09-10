const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const generateReportButton = document.getElementById('generateReport');
let tasks = [];

taskForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const taskText = taskInput.value.trim();

    // Verifique se � um dia �til (de segunda a sexta-feira)
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 (domingo) a 6 (s�bado)

    if (dayOfWeek >= 1 && dayOfWeek <= 5) { // Dias �teis
        if (taskText !== '') {
            tasks.push({ text: taskText, date: today });
            updateTaskList();
            taskInput.value = '';
        }
    } else {
        alert('Voc� s� pode adicionar tarefas nos dias �teis (segunda a sexta-feira).');
    }
});

generateReportButton.addEventListener('click', function () {
    generateWeeklyReport();
});

function updateTaskList() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.text;
        taskList.appendChild(li);
    });
}

function generateWeeklyReport() {
    // Pseudoc�digo para gerar um relat�rio semanal:
    // 1. Filtrar as tarefas conclu�das na �ltima semana.
    // 2. Contar o n�mero de tarefas conclu�das por usu�rio.
    // 3. Gerar um relat�rio com essas informa��es.
    // 4. Exibir o relat�rio para os usu�rios.
    // 5. Enviar o relat�rio por e-mail para os administradores.

    // Aqui voc� implementaria a l�gica real para gerar o relat�rio.
}
