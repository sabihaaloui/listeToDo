document.addEventListener('DOMContentLoaded', loadTasks);

document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Récupération des valeurs de la tâche et de la date
    const taskName = document.getElementById('task-name').value;
    const taskDate = document.getElementById('task-date').value;

    // Création de l'objet tâche
    const task = {
        name: taskName,
        date: taskDate
    };

    // Ajout de la tâche dans localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Message de confirmation
    alert('Tâche ajoutée avec succès !');

    // Réinitialiser le formulaire
    document.getElementById('task-form').reset();

    // Recharger la liste
    loadTasks();
});

function loadTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = ''; // Efface la liste

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task.name} - ${task.date}</span>
            <button onclick="deleteTask(${index})">Supprimer</button>
            <button onclick="editTask(${index})">Modifier</button>
        `;
        taskList.appendChild(li);
    });
}

function deleteTask(index) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks();
}

function editTask(index) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const task = tasks[index];

    // Remplir le formulaire avec les valeurs de la tâche à modifier
    document.getElementById('task-name').value = task.name;
    document.getElementById('task-date').value = task.date;

    // Supprimer la tâche ancienne
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
