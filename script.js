const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const generateReportButton = document.getElementById('generateReport');
let tasks = [];

taskForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const taskText = taskInput.value.trim();

    // Verifique se é um dia útil (de segunda a sexta-feira)
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 (domingo) a 6 (sábado)

    if (dayOfWeek >= 1 && dayOfWeek <= 5) { // Dias úteis
        if (taskText !== '') {
            tasks.push({ text: taskText, date: today });
            updateTaskList();
            taskInput.value = '';
        }
    } else {
        alert('Você só pode adicionar tarefas nos dias úteis (segunda a sexta-feira).');
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
    // Pseudocódigo para gerar um relatório semanal:
    // 1. Filtrar as tarefas concluídas na última semana.
    // 2. Contar o número de tarefas concluídas por usuário.
    // 3. Gerar um relatório com essas informações.
    // 4. Exibir o relatório para os usuários.
    // 5. Enviar o relatório por e-mail para os administradores.

    // Aqui você implementaria a lógica real para gerar o relatório.
}
